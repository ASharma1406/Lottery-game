import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum} from "./helper";
// import TicketNum from "./TicketNum";
import Ticket from "./Ticket";


// function genticket(n) {
// this function is for generating random no. of ticket and is written in a separate file as helper js and then imported in this file
// }

export default function Lottery({n = 3, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket (genTicket(n));
    };

    return (
        
        <div>
            <h1 className="Heading1">Lottery Game!</h1>
            &nbsp;
            <Ticket ticket={ticket}/>
            <br /> 
            &nbsp;&nbsp;&nbsp;
            <button onClick={buyTicket}>Buy new ticket</button>
            &nbsp;&nbsp;&nbsp;
            <br />
            <h3 className="Heading3">{isWinning && "Congratulations, you won"}</h3>
        </div>
    );
}