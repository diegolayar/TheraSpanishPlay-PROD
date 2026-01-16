import React from 'react';
import '../../App.css';
import './ConnectAndo.css';
import Footer from '../footer/Footer.js';

import { ReactComponent as ConnectAndoShape } from '../../assets/navigation-assets/connect-ando-shape.svg';
import connectAndoHero from '../../assets/navigation-assets/connect-ando-hero-3d54ee.png';
import connectAndoLogo from '../../assets/navigation-assets/connect-ando-logo.png';

const ConnectAndo = () => {
    return (
        <div className='connect-ando-page purple'>
            {/* Hero Section */}
            <div className='connect-ando-hero'>
                <div className='hero-content'>
                    <h1 className='hero-title'>
                        Connect-ando,<br/>now available!
                    </h1>
                    <p className='hero-subtitle'>
                        Connect-ando turns your first move into your first phrases in Spanish!
                    </p>
                    <img src={connectAndoLogo} alt='Connect-ando Logo' className='connect-ando-logo' />
                </div>
                <img src={connectAndoHero} alt='Connect-ando Game' className='hero-image' />
            </div>

            {/* Yellow Section with Shape Background */}
            <div className='connect-ando-content'>
                <ConnectAndoShape className='background-shape' />
                
                <div className='content-overlay'>
                    {/* Recommendations Section */}
                    <div className='recommendations-section'>
                        <div className='recommendations-title'>
                            <h2>Recommendations before playing</h2>
                        </div>
                        <div className='recommendations-text'>
                            <p className='spanish-text'>
                                Lee el glosario antes de jugar.<br/>
                                Di las frases en voz alta.<br/>
                                Juega a seguido cambiando modalidades.
                            </p>
                            <p className='english-text'>
                                Read the glossary before playing.<br/>
                                Say phrases out loud.<br/>
                                Play often switching game modalities.
                            </p>
                        </div>
                    </div>

                    {/* Warning */}
                    <p className='warning-text'>
                        Precaución: se recomienda supervisión de un adulto durante el juego.<br/>
                        Warning: it is recommended for an adult to supervise the game.
                    </p>

                    {/* Game Modalities */}
                    <div className='modalities-section'>
                        <h2 className='modalities-title'>Modalities on how you can play connect-ando</h2>
                        
                        {/* Modality 1 - Lucky Match */}
                        <div className='modality-block'>
                            <button className='modality-button purple'>
                                1. GOLPE DE SUERTE / LUCKY MATCH
                            </button>
                            <div className='modality-content'>
                                <div className='spanish-instructions'>
                                    <p>
                                        Separa verbos y objetos/lugares en dos mazos. Los jugadores toman una carta de cada mazo para formar una combinación válida (ej. beber–café). Si no combina, se quedan con las cartas. Tras 8 rondas, gana quien tenga menos cartas.
                                    </p>
                                </div>
                                <div className='english-instructions'>
                                    <p>
                                        Separate verbs and objects/places into two decks. Players draw one card from each to make a correct match (e.g., drink–coffee). If no match, they keep the cards. After 8 rounds, the player with the fewest cards wins.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Modality 2 - Loteria/Bingo */}
                        <div className='modality-block'>
                            <button className='modality-button teal'>
                                LOTERIA / BINGO
                            </button>
                            <div className='modality-content'>
                                <div className='spanish-instructions'>
                                    <p>
                                        Reparte 8 cartas a cada jugador. El guía dice palabras al azar del glosario incluido en la caja. Quien tenga la palabra coloca la carta en el centro. Gana quien se quede sin cartas primero.<br/>
                                        Deal 8 cards to each player.
                                    </p>
                                </div>
                                <div className='english-instructions'>
                                    <p>
                                        The caller says random words from the glossary included in the box. Players with that word place the card in the center. The first to run out of cards wins.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Modality 3 - Me Gusta */}
                        <div className='modality-block'>
                            <button className='modality-button green'>
                                ME GUSTA! / I LIKE!
                            </button>
                            <div className='modality-content'>
                                <div className='spanish-instructions'>
                                    <p>
                                        Reparte 6 cartas de verbos a cada jugador. El guía muestra una carta del mazo de sustantivos, quien tenga un verbo que combine levanta su carta y grita "¡ME GUSTA!" Ej.: Beber-el café. El más rápido se queda con la carta. Tras 10 rondas, gana quien tenga más cartas.
                                    </p>
                                </div>
                                <div className='english-instructions'>
                                    <p>
                                        Deal 6 verb cards to each player. The caller flips one noun card from the deck. Whoever has a verb that matches it lifts their card and shouts "ME GUSTA!" Example: Beber – el café (to drink – the coffee). The fastest player keeps the noun card. After 10 rounds, the player with the most cards wins.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Modality 4 - Connect-ando I */}
                        <div className='modality-block'>
                            <button className='modality-button orange'>
                                CONNECT-ANDO I
                            </button>
                            <div className='modality-content'>
                                <div className='spanish-instructions'>
                                    <p>
                                        En cada ronda, el guía coloca 4 cartas de verbos y 4 cartas de lugares visibles, y reparte una carta de sustantivo oculta a cada jugador. De inmediato dirá "CONNECT-ANDO", cada jugador revela su sustantivo e intentan formar una frase lógica: verbo+sustantivo+lugar. Correcto = +1 punto, incorrecto = 0 Gana quien llegue a 8 puntos.
                                    </p>
                                </div>
                                <div className='english-instructions'>
                                    <p>
                                        In each round, the guide places 4 verb cards and 4 place cards face up, and deals one noun card face down to each player. Immediately, the guide says "CONNECT-ANDO!" — players reveal their noun card and try to build a logical sentence: verb + noun + place. Correct = +1 point, incorrect = 0. The first player to reach 8 points wins.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Modality 5 - Connect-ando II */}
                        <div className='modality-block'>
                            <button className='modality-button bright-yellow black-text'>
                                CONNECT-ANDO II
                            </button>
                            <div className='modality-content'>
                                <div className='spanish-instructions'>
                                    <p>
                                        Cada jugador recibe 3 cartas de verbos, deberá elegir alguna para pasarla al jugador que está a su derecha cuando el guía diga CONNECT-ANDO. Una vez que todos han pasado los verbos se voltea una carta del mazo de sustantivos, el jugador que tenga alguna carta de verbo que combine con la carta de sustantivo deberá decir "CONNECT-ANDO". Si no combina deberá tomar otra carta del mazo de verbos. Gana quien primero quede sin cartas
                                    </p>
                                </div>
                                <div className='english-instructions'>
                                    <p>
                                        Each player receives 3 verb cards and must choose one to pass to the player on their right when the caller says CONNECT-ANDO. After all players have passed their verbs, one card from the OBJECTS DECK is revealed in the center of the table. The player who has a verb card that correctly matches the revealed object card must say "CONNECT-ANDO." If the verb does not make a valid combination, the player must draw another card from the verb deck. The winner is the first player who manages to get rid of all their cards.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Modality 6 - Connect-ando III */}
                        <div className='modality-block'>
                            <button className='modality-button cream black-text'>
                                CONNECT-ANDO III
                            </button>
                            <div className='modality-content'>
                                <div className='spanish-instructions'>
                                    <p>
                                        Coloca mazos de verbos, sustantivos y lugares boca abajo. Encima de los mazos, coloca las cartas de inicio "me gusta / yo quiero …" y al lado los conectores. En su turno, un jugador voltea una carta de cada mazo y forma una oración eligiendo una carta de frase inicial y, si hace falta, una preposición. Oración válida = 1 punto. Si agrega una palabra extra para mejorarla = 2 puntos. Gana quien tenga más puntos tras 10 rondas.
                                    </p>
                                </div>
                                <div className='english-instructions'>
                                    <p>
                                        Place the verb, noun, and place decks face down. On top of the decks, place the starter cards ("me gusta / yo quiero …"), and place the connectors next to them. On their turn, a player flips one card from each deck and forms a sentence by choosing a starter card and, if needed, a preposition. Valid sentence = 1 point. If the player adds one extra word to improve the sentence = 2 points After 10 rounds, the player with the most points wins.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Share Section */}
                    <div className='share-section'>
                        <p className='share-text'>
                            If you have discovered a new way to play connect-ando, share it with us!
                        </p>
                        <a href='mailto:theraspanishplay@gmail.com' className='share-button gray'>
                            SHARE IT
                        </a>
                    </div>

                    {/* Creative Team Section */}
                    <div className='creative-team-section'>
                        <div className='team-left'>
                            <h2 className='team-title'>
                                Equipo Creativo/<br/>Creative Team
                            </h2>
                        </div>
                        <div className='team-right'>
                            <div className='team-member'>
                                <p className='member-name'>Ileana Laya Sanz</p>
                                <p className='member-role'>Creación del juego / Game Creator</p>
                            </div>
                            <div className='team-member'>
                                <p className='member-name'>Paola Hernandez</p>
                                <p className='member-role'>Ilustración / Illustration</p>
                            </div>
                            <div className='team-member'>
                                <p className='member-name'>Sabrina Rodriguez Laya</p>
                                <p className='member-role'>Diseño gráfico / Graphic Design</p>
                            </div>
                            <div className='team-member'>
                                <p className='member-name'>Sebastián Laya</p>
                                <p className='member-role'>Asistencia técnica / Technical Assistance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer-wrapper'>
                <Footer />
            </div>
        </div>
    );
};

export default ConnectAndo;
