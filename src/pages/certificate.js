import { useContext, useEffect, useState } from "react";
import LineTopImg from "../images/top.png";
import LineBottomImg from "../images/bottom-line.png";
import CerImg from "../images/stamp.png";
import {CertificateContext} from "../web3/CertificateContext"

export const Certificate = () => {
	const [name, setName] = useState('');
    const [degree, setDegree] = useState('');
	const [date, setDate] = useState('');
	const {getNewCertId, certId, mintCertificate, transactionHash} = useContext(CertificateContext);

	useEffect(() => {
		getNewCertId();
	},[])

	const mint = () => {
		mintCertificate(name, degree, date);
	}

    return (
		<div className="bg-white">
        <div className="container">
          <div className="cross-line text-center my-2 mx-2 back-col">
            <div className="row mt-3">
              <div className="col">
                <img className="d-block mx-auto" src={LineTopImg} alt="" width="300" height="150"/>
                <h3>Sample</h3>
                <h1 className="text-pink"><font face="cursive">Certificate of Completion</font></h1>
                <h3 className="text-pink">Recorded forever in Blockchain</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p className="lead mx-4 border-line"><font face="cursive"></font></p>
              </div>
              <div className="col-md-4">
                <p><input placeholder="Name" style={{textAlign: 'center', border:'none' , borderBottom :'1px solid', backgroundColor: 'transparent'}} value={name.toUpperCase()} onChange={(e) => setName(e.target.value)} size="40"></input></p>
              </div>
              <div className="col-md-4">
                <p className="lead mx-4 border-line"><font face="cursive"></font></p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>having successfully completed the prescribed Course of Study and the Examinations of this University was admitted to the Degree of <br></br>  <code className="border-line text-dark">
					<font size="5" face="Bedrock"><input placeholder="DEGREE" style={{backgroundColor: 'transparent',textAlign: 'center', border:'none' , borderBottom :'1px solid'}} value={degree.toUpperCase()} onChange = {(e) => setDegree(e.target.value)} size='60'></input></font>
					</code><br/>on
					<br></br><font face="cursive"><input placeholder="Date" style={{backgroundColor: 'transparent',textAlign: 'center', border:'none' ,borderBottom :'1px solid'}} value={date} onChange = {(e) => setDate(e.target.value)}></input></font>
					<br></br>This Certificate was Recored in a Smart Contract of Ethereum.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-8 text-left">
                <blockquote className="blockquote ml-2">
                  <p className="mb-1">Transaction Hash:</p>
                  <footer className="blockquote-footer break-word">
                  {transactionHash}
                  </footer>
                </blockquote>
                <blockquote className="blockquote ml-2">
                  <p className="mb-1">Certificate ID:</p>
                  <footer className="blockquote-footer break-word">{certId.toString() }</footer>
                </blockquote>
              </div>
              <div className="col-md-2">
                <img src={CerImg} alt="certificates stamp" width="150" height="150" style={{filter: 'brightness(70%)'}}/>
              </div>
              <div className="col-md-1"></div>
            </div>
            <div className="row">
              <div className="col">
                <img className="d-block mx-auto" src={LineBottomImg} alt="" width="270" height="140"/>
              </div>
            </div>
          </div>
        </div>

        <div className="pink lighten-1">
          <div className="container">
            <div className="row text-white">
              <div className="col">
                <p className="lead my-1">
                 
                </p>
              </div>
            </div>
            {/* { isSample
              ? <div className="row mb-2">
                  <div className="col">
                    <Link className="btn btn-lg btn-block btn-outline-pink"
                      to={`/issue/${toHex(this.state.bride)}/${toHex(this.state.groom)}`}>
                      <Determinator>
                      {{
                        en: 'Next',
                        ja: '次へ'
                      }}
                      </Determinator>
                    </Link>
                  </div>
                </div>
              : ''
             } */}
          </div>
        </div>
		<button onClick = {mint}>Submit</button>
      </div>
	)
}