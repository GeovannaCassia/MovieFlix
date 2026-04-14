import { motion } from 'framer-motion';
import imgMovie from '../Assets/img/LogoMovieFlix.png';
import { useNavigate } from 'react-router-dom';

function AnimateIntroPage () {
    const navigate = useNavigate();

    return (
        <section className='flex flex-col h-screen items-center justify-center gap-6'>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <img src={imgMovie} className="h-[250px] w-[250px]" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
            >
                <div className='text-8xl intro flex'>
                    <h1 className='text-red-600'>Movie</h1>
                    <h1 className='text-white'>Flix</h1>
                </div>
            </motion.div>

            <motion.button
                className='bg-red-600 rounded-full text-2xl px-9 py-2 text-white'
                animate={{ y: [0, -6, 0] }}
                transition={{
                    delay: 2,
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                onClick={() => navigate("/home")}
            >
                Começar
            </motion.button>

        </section>
    );
}

export default AnimateIntroPage;