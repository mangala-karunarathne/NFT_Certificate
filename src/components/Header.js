import React, {useContext} from 'react'
import { CertificateContext } from '../web3/CertificateContext';

export default function Header() {
    const { connectWallet, currentAccount } = useContext(CertificateContext);

    return (
        <div>
            <nav className='page-header'>  
                <h1 className='header-title'>NFT Certificate</h1>
                <button className='wallet-button' onClick={connectWallet}>{!currentAccount ? 'Connect Wallet' : currentAccount}</button>
            </nav>
        </div>
    )
}