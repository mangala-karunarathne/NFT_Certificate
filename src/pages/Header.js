import React, {useContext} from 'react'
import { CertificateContext } from '../web3/CertificateContext';

export default function Header() {
    const { connectWallet, currentAccount } = useContext(CertificateContext);

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">  
                <button class="badge badge-dark" onClick={connectWallet}>{!currentAccount ? 'Connect Wallet' : currentAccount}</button>
            </nav>
        </div>
    )
}