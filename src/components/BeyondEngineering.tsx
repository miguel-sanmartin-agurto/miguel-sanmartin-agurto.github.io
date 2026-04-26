import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function BeyondEngineering() {
  // Mantenemos las mismas variantes para consistencia visual
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const photos = [
    { url: "/viajes/japan.jpg", caption: "Japan" },
    { url: "/viajes/torres_paine.jpg", caption: "Patagonia Trekking" },
    { url: "/viajes/thailand.jpg", caption: "Thailand" },
  ];

  return (
    <section id="beyond" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        
        {/* Título de la Sección */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-emerald-500 mb-2"
            variants={childVariants}
          >
            Beyond Engineering <span className="inline-block">🌍</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-green-600 mx-auto rounded-full"
            variants={childVariants}
          />
        </motion.div>

        {/* Cuadro de Reseña Personal */}
        <MotionWrapper>
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-600/10 backdrop-blur-sm p-8 rounded-lg border border-emerald-500/20 dark:border-emerald-500/10 shadow-sm mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed text-center italic relative">
              {/* Barra decorativa tipo PCB */}
              <span className="absolute -left-4 top-0 h-full w-1 bg-emerald-500/20 rounded-full hidden md:block"></span>
              "When I'm not designing hardware or analyzing power systems, I'm exploring new horizons. 
              From the vibrant cultures of Southeast Asia to the silent peaks of Torres del Paine, 
              traveling and trekking keep my curiosity alive. I believe that the same drive needed 
              to debug a complex circuit is what pushes me to reach the next summit."
            </p>
          </div>
        </MotionWrapper>

        {/* Carrusel / Grid de Fotos */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square overflow-hidden rounded-xl border border-emerald-500/20 group shadow-lg"
            >
              {/* Glow exterior al hacer hover */}
              <div className="absolute -inset-1 bg-emerald-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              
              <img 
                src={photo.url} 
                alt={photo.caption}
                className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay con el nombre del lugar */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-4">
                <span className="text-emerald-400 text-sm font-mono font-bold tracking-tighter">
                  {`> ${photo.caption}`}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}