import React from "react";
import Navbar from "../Navbar";

function Article1(){
    return(
        <div >
            <Navbar />
            <div className="article-centering">
            <img className="article-thumbnail" src="images/final/1.png" alt="" />

                <div className="article-grid">
                <div className="vocab-box">
                <div className="button-to-quiz absolute-button">
                    <a href="/quiz" ><button className="button-to-quiz-styles top-button">Go to the quiz!</button></a>
                </div> 
                <h4>Vocabulary</h4>
                <p className="vocab-list"><span className="bold-vocab">una bellezza mozzafiato:</span> a breathtaking beauty<br />
                    <span className="bold-vocab">mondo:</span> world<br />
                    <span className="bold-vocab">tesori:</span> treasures<br />
                    <span className="bold-vocab">una storia millenaria:</span> thousand year old history<br />
                    <span className="bold-vocab">passeggiare:</span> strolling <br />
                    <span className="bold-vocab">strade:</span> streets<br />
                    <span className="bold-vocab">stretti:</span> narrow <br />
                    <span className="bold-vocab">vicoli:</span> alleys <br />
                    <span className="bold-vocab">attraversare:</span> crossing<br /> 
                    <span className="bold-vocab">ponti:</span> bridges <br />
                    <span className="bold-vocab">vivere:</span> to live <br />
                    <span className="bold-vocab">viaggio:</span> journey, trip<br /> 
                    <span className="bold-vocab">indietro:</span> back <br />
                    <span className="bold-vocab">tempo:</span> time<br />
                    <span className="bold-vocab">chiese:</span> churches<br />
                    <span className="bold-vocab">musei:</span> museums<br />
                    <span className="bold-vocab">sorge (sorgere):</span> rises (to rise)<br />
                    <span className="bold-vocab">isole:</span> islands<br />
                    <span className="bold-vocab">sistemi di viabilità:</span> transportation systems <br />
                    <span className="bold-vocab">vie d’acqua:</span> by water<br />
                    <span className="bold-vocab">percorsi pedonali:</span> pedestrian routes, walks<br />
                    <span className="bold-vocab">calli:</span> lanes<br />
                    <span className="bold-vocab">campi:</span> fields<br />
                    <span className="bold-vocab">rive:</span> banks<br />
                    <span className="bold-vocab">che uniscono (unire):</span> that connect (to connect, to unite)<br />
                    <span className="bold-vocab">fra di loro:</span> with each other <br />
                    <span className="bold-vocab">costruiti (costruire):</span> built (to build)<br /> 
                    <span className="bold-vocab">in pietra:</span> of stone<br />
                    <span className="bold-vocab">poco attraenti:</span> not so attractive <br />
                    <span className="bold-vocab">terraferma:</span> mainland<br />
                    <span className="bold-vocab">una volta:</span> once upon a time<br />
                    <span className="bold-vocab">in legno:</span> of wood<br />
                    <span className="bold-vocab">senza gradini:</span> without steps<br />
                    <span className="bold-vocab">in modo che:</span> in a way that<br />
                    <span className="bold-vocab">vi potessero transitare:</span> could pass <br />
                    <span className="bold-vocab">carrozze:</span> carriages<br />
                    <span className="bold-vocab">cavalla:</span> horses<br />
                    <span className="bold-vocab">il modo migliore:</span> the best way<br />
                    <span className="bold-vocab">per scoprirla:</span> to discover it<br />
                    <span className="bold-vocab">passeggiare:</span> to walk<br />
                    <span className="bold-vocab">lasciandosi transportare:</span> letting yourself to be carried<br />
                    <span className="bold-vocab">più nascoste:</span> more hidden<br />
                    <span className="bold-vocab">che sono numerosissimi:</span> that are numerous<br />
                    <span className="bold-vocab">elencare:</span> listing<br />
                    <span className="bold-vocab">irrinunciabili:</span> that cannot be renounced<br />
                    <span className="bold-vocab">le strade:</span> streets</p>
                </div>
                
                <div className="space-me">

                {/* <div className="button-to-quiz absolute-button">
                    <a href="/quiz" ><button className="button-to-quiz-styles top-button">Go to the quiz!</button></a>
                </div>  */}

                <h2 className="article-title-align">Camminare per Venezia</h2>
                    <div className="para-widths">
                        <img className="venice-pics-right" src="/article-imgs/gondola.jpg" alt="gondola" />
                        <p>Venezia è una città di <span className="bold-vocab">una bellezza mozzafiato</span>, unica
                         al <span className="bold-vocab">mondo</span>, ricca di <span className="bold-vocab">tesori </span>
                        e di <span className="bold-vocab">una storia millenaria</span>. <span className="bold-vocab">
                        Passeggiare</span> per le sue <span className="bold-vocab">strade</span>, le piazze, gli 
                        <span className="bold-vocab"> stretti</span> <span className="bold-vocab">vicoli</span> e 
                        <span className="bold-vocab"> attraversare</span> i <span className="bold-vocab">ponti</span> della 
                        città può essere una esperienza memorabile, da <span className="bold-vocab">vivere</span> come un 
                        magico <span className="bold-vocab">viaggio</span> <span className="bold-vocab">indietro</span> nel 
                        <span className="bold-vocab"> tempo</span>.</p>
                    </div>
                    <br />
                    <div className="para-widths">
                        <p>Venezia una città dalla storia antica e illustre, dunque è ricchissima di <span className="bold-vocab">chiese </span>
                        e basiliche, <span className="bold-vocab">musei</span>, splendidi palazzi nobiliari di antica origine, 
                        residenze e ville storiche. La città <span className="bold-vocab">sorge</span> su 118 
                        <span className="bold-vocab"> isole</span> e la sua struttura urbana è caratterizzata dalla distinzione 
                        tra due <span className="bold-vocab">sistemi di viabilità</span>: quello delle <span className="bold-vocab">vie d’acqua</span>
                        (canali) e quello dei <span className="bold-vocab">percorsi pedonali</span> (<span className="bold-vocab">calli</span>,
                        <span className="bold-vocab"> campi</span>, <span className="bold-vocab">rive</span>). I ponti, 
                        <span className="bold-vocab"> che uniscono</span> <span className="bold-vocab">fra di loro</span> le varie piccole 
                        isole, sono centinaia e sono <span className="bold-vocab"> costruiti in pietra</span>. Alcuni ponti sono 
                        modernissimi e <span className="bold-vocab">poco attraenti</span>, come il ponte della Libertà (che è lungo 4 
                        km e collega Venezia alla <span className="bold-vocab">terraferma</span>) e altri meravigliosi e antichissimi 
                        come il Ponte di Rialto. <span className="bold-vocab">Una volta</span> i ponti erano tutti 
                        <span className="bold-vocab">in legno</span> e <span className="bold-vocab">senza gradini</span>, 
                        <span className="bold-vocab"> in modo che vi potessero transitare carrozze</span> e 
                        <span className="bold-vocab"> cavalli</span>.</p>
                    </div>
                    <br />
                    <div className="para-widths">
                        <img className="venice-pics-left" src="/article-imgs/venice.jpg" alt="venice" />
                        <p><span className="bold-vocab">Il modo migliore per scoprirla</span> è <span className="bold-vocab">passeggiare </span>
                        per le sue calli, <span className="bold-vocab">lasciandosi trasportare</span> dalla curiosità e avventurarsi 
                        nei vicoli e nelle piazze <span className="bold-vocab">più nascoste</span>. La città è ricchissima di ponti, 
                        <span className="bold-vocab"> che sono numerosissimi</span>. <span className="bold-vocab">Elencare </span> 
                        tutte le attrazioni presenti a Venezia è impossibile, per cui eccone alcune, <span className="bold-vocab">irrinunciabili</span>,
                        da ammirare passeggiando per <span className="bold-vocab">le strade</span> della città.</p>
                        {/* <h6 className="credits">Article credits: thinkItalian September 2012</h6> */}
                    </div>  

                    <div className="button-to-quiz">
                    <a href="/quiz" ><button className="button-to-quiz-styles top-button">Go to the quiz!</button></a>
                    <h6 className="credits">Article credits: thinkItalian September 2012</h6>
                    </div>   

                </div>
                </div>
            </div>
        </div>
    )
}

export default Article1;