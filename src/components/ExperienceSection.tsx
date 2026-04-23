import { workExperience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Briefcase, ChevronLeft, ChevronRight } from 'lucide-react'; // Añadimos flechas
import { motion, AnimatePresence } from "framer-motion";
import MotionWrapper from "./MotionWrapper";


import { useState, useRef } from 'react';

export default function ExperienceSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Referencias para controlar el scroll de cada carrusel de forma independiente
  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scroll = (key: string, direction: 'left' | 'right') => {
    const container = scrollRefs.current[key];
    if (container) {
      const scrollAmount = 350; // Ajusta cuánto avanza el scroll por clic
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="experience"
      className="py-12 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center md:inline-block">
            <motion.span
              className="inline-block mr-2"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              💼
            </motion.span>{" "}
            Work Experience
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {workExperience.map((job, index) => {
            const jobKey = `job-${index}`;
            return (
              <TimelineItem
                key={job.company + job.period}
                title={`👨‍💻 ${job.position} | ${job.company}`}
                subtitle={`🌍 ${job.location}`}
                date={`📅 ${job.period}`}
                isLast={index === workExperience.length - 1}
                index={index}
              >
                <motion.div
                  className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* --- SECCIÓN: MAIN TASKS --- */}
                  <div className="flex items-center mb-3">
                    <div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
                      <Briefcase className="h-4 w-4 text-purple-500" />
                    </div>
                    <h4 className="text-sm font-medium">Main tasks</h4>
                  </div>
                  <ul className="list-none ml-4 space-y-2 text-sm mb-6">
                    {job.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground relative pl-6"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        <span className="absolute left-0 text-purple-500 font-bold">•</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>

                  {/* --- SECCIÓN: CARRUSEL DE FOTOS --- */}
                  {job.images && job.images.length > 0 && (
                    <div className="relative mt-4 group">
                      {/* Botón Izquierda */}
                      <button
                        onClick={() => scroll(jobKey, 'left')}
                        className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-purple-600 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                        aria-label="Scroll left"
                      >
                        <ChevronLeft size={20} />
                      </button>

                      {/* Contenedor de Imágenes */}
                      <div
                        ref={(el) => (scrollRefs.current[jobKey] = el)}
                        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 pr-10"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      >
                        {job.images.map((img, i) => (
                          <motion.div
                            key={i}
                            className="flex-shrink-0 snap-start"
                            whileHover={{ y: -5 }}
                          >
                            <img
                              src={img}
                              alt={`Work evidence ${i}`}
                              className="w-64 h-40 object-cover rounded-lg cursor-zoom-in border border-purple-500/10 hover:border-purple-500/40 transition-colors shadow-md"
                              onClick={() => setSelectedImage(img)}
                            />
                          </motion.div>
                        ))}
                      </div>

                      {/* Botón Derecha */}
                      <button
                        onClick={() => scroll(jobKey, 'right')}
                        className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-purple-600 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                        aria-label="Scroll right"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  )}
                </motion.div>
              </TimelineItem>
            );
          })}
        </div>
      </div>

      {/* --- MODAL DE IMAGEN FULLSCREEN --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
            />
            <button className="absolute top-6 right-6 text-white/70 hover:text-white text-xl">
              ✕ Cerrar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}