import Particles from 'react-particles-js';

function ParticlesComponent() {
    return (
            <Particles 
                width="100%" style={{minHeight:"1000px"}}
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} 
            />
    )
}

export default ParticlesComponent
