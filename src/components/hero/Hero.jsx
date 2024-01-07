import { Button, Form, InputGroup } from 'bootstrap-4-react/lib/components';
import '../style/hero.css'
import { FaRegCircle } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { logo } from '../../const/logos';
function Hero() {
    return (
        <div className='hero' >
            <div className='left-side' >
                <FaRegCircle className='circle' />
                <span className='line' ></span>
                <div className='tags'>
                    <MdKeyboardArrowLeft />
                    <MdKeyboardArrowRight />
                </div>
                <span className='line-down' ></span>
            </div>
            <div className='right-side' >
                <div>
                    <h1>Let's build from here</h1>
                    <p>The world's leading AI-powerd developer platform.</p>
                </div>
                <div className='btn-section' >
                    <InputGroup mb="3">
                    <Form.Input type="search" placeholder="" mr="sm-2" />
                        <InputGroup.Append>
                            <Button secondary>Button</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <Button className="btn-second" secondary>Button</Button>
                </div>
                <div className='down-part' >
                    <p>Trusted by the world's leading organizations</p>
                    <ul className='leading' >
                        {
                                logo.map(ele => [
                                    <li><img src={ele.img} /></li>
                                ])
                        }
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Hero
