import React, { useEffect, useState } from "react";
import {ethers} from 'ethers';

import certAbi from "./cert_abi.json";

export const CertificateContext = React.createContext();

const contractAddress = "0x08644171D7a8F8435e4C91CCf794cea600A286c8";
const { ethereum } = window;

const getEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	const contract = new ethers.Contract(contractAddress, certAbi, signer);
	return contract;
}

export const CertificateProvider = ({children}) => {
	const [currentAccount, setCurrentAccount] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [certId, setCertId] = useState('');
	const [transactionHash,setTransactionHash] = useState('0x0000000000000000000000000000000000000000');

	const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert('Please enable Metamask');

            const accounts = await ethereum.request({ method: 'eth_accounts' });

            console.log(accounts,'accounts')
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                console.log('no account')
            }

        } catch (error) {
            console.log(error)
            
            throw new Error('No ethereum');
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('Please install Metamask');

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            window.localStorage.setItem('accounts', accounts[0]);
            setCurrentAccount(accounts[0]);

        } catch (error) {
            console.log(error);

            throw new Error('No ethereum');
        }
    }

	const getNewCertId = async () => {
        try {
            if (!ethereum) return alert('Please install Metamask');
            const certContract = getEthereumContract();

            const tx = await certContract.getNewCertId();
            console.log(tx)
			setCertId(tx);
            //setChildId({id:tx, index:taskId});
        } catch (err) {
            console.log(err);
        }
    }

	const mintCertificate = async (_studentName, _courseName, _degreeName) => {
        try {
			if (!ethereum) return alert('Please install Metamask');
            const certContract = getEthereumContract();

            const tx = await certContract.issueCertificate(_studentName, _courseName, _degreeName);
		    setIsLoading(true);
            console.log(tx);
            await tx.wait();
            setIsLoading(false);
            console.log('suc',tx);
			setTransactionHash(tx.hash);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

	return (
        <CertificateContext.Provider value={{connectWallet, currentAccount, isLoading, getNewCertId, certId, mintCertificate, transactionHash}}>
            {children}
        </CertificateContext.Provider>
    )
}

