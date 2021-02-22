import "./Footer.css";
import { SocialIcon } from "react-social-icons"

export default function Footer() {
    return (
        <footer class="page-footer">
            <div class="footer-container">
                <div class="row">
                    <div class="footer-aboutme">
                        <h5 class="footer-title">About</h5>
                        <p class="footer-aboutme">Speed Read is a dedicated application focued on improving your reading speed and comprehension level. With a fully interactive enviornment,</p>
                        <p>you have the ability to choose how you'd like to push your mind and train yourself.</p>
                    </div>
                    <div class="footer-social">
                        <h5 class="white-text">Connect</h5>
                        <ul>
                            <li>
                                <SocialIcon url='https://github.com/bkhundmiri/speed-read' bgColor="black" fgColor="white" target="_blank"/>
                            </li>
                            <li>
                                <SocialIcon url='https://www.linkedin.com/in/bilal-khundmiri-339733148/' bgColor="black" fgColor="white" target="_blank"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">© Speed Read 2021</div>
            </div>
        </footer>
    );
}
