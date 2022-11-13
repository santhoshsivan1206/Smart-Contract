import React from 'react';
import './../Home.css';
import img1 from './../../assets/img3.jpg';
import png1 from './../../assets/png1.png';
import png2 from './../../assets/png2.png';
import png3 from './../../assets/png3.png';
const Home = () => {
    return (
        
        <div className='container'>
            <div className='phase-1'>
                <br></br>
              <h1>What are smart contracts on blockchain?</h1>
              <br></br>
              <h3>Smart contracts are digital contracts stored on a blockchain that are automatically executed when predetermined terms and conditions are met</h3>
              <br></br>

               <img src={img1} alt="" width={500}/>

              <br></br><br></br>
              <h1>How smart contracts work?</h1> <br></br>
              <h4>Smart contracts work by following simple “if/when…then…” statements that are written into code on a blockchain. A network of computers executes the actions  when predetermined conditions have been met and verified. These actions could include releasing funds to the appropriate parties, registering a vehicle, sending notifications, or issuing a ticket. The blockchain is then updated when the transaction is completed. That means the transaction cannot be changed, and only parties who have been granted permission can see the results.

Within a smart contract, there can be as many stipulations as needed to satisfy the participants that the task will be completed satisfactorily. <br></br><br></br>To establish the terms, participants must determine how transactions and their data are represented on the blockchain, agree on the “if/when...then…” rules that govern those transactions, explore all possible exceptions, and define a framework for resolving disputes.

Then the smart contract can be programmed by a developer – although increasingly, organizations that use blockchain for business provide templates, web interfaces, and other online tools to simplify structuring smart contracts.</h4>
<br></br><br></br>


            <h1>Benefits of smart contracts</h1>
            <br></br><br></br>
            <img src={png1} alt="" width={80}/><br></br><br></br><h4>Speed, efficiency and accuracy</h4><h6>Once a condition is met, the contract is executed immediately. Because smart contracts are digital and automated, there’s no paperwork to process and no time spent reconciling errors that often result from manually filling in documents.</h6>
            <br></br><br></br><br></br>
            <img src={png2} alt="" width={80}/><br></br><br></br><h4>Trust and transparency</h4><h6>Because there’s no third party involved, and because encrypted records of transactions are shared across participants, there’s no need to question whether information has been altered for personal benefit.</h6>
            <br></br><br></br><br></br>
            <img src={png3} alt="" width={80}/><br></br><br></br><h4>Security</h4><h6>Blockchain transaction records are encrypted, which makes them very hard to hack. Moreover, because each record is connected to the previous and subsequent records on a distributed ledger, hackers would have to alter the entire chain to change a single record.</h6>
            <br></br><br></br><br></br><br></br><br></br><br></br>



            </div>
        </div>
    )
}

export default Home;