import type { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Hero1 from "../assets/Hero1.jpeg"
import Hero2 from "../assets/Hero2.jpeg"
import Hero3 from "../assets/Hero3.jpeg"
import Hero4 from "../assets/Hero4.jpeg"
import Hero5 from "../assets/Hero5.jpeg"

const CarouselReact: FC = () => {
    return (
        <div
            className="w-full mx-auto px-2 sm:px-4 lg:px-8 pb-8 "
            style={
                {
                    // Asegura flechas y puntos visibles (blancos) sobre cualquier fondo
                    ["--swiper-navigation-color" as any]: "#ffffff",
                    ["--swiper-pagination-color" as any]: "#ffffff",
                    // Padding inferior seguro para dispositivos con safe-area
                    paddingBottom: "env(safe-area-inset-bottom, 2rem)",
                } as React.CSSProperties
            }
        >
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop
                slidesPerView={1}         // siempre 1 slide en todos los tamaños
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                style={{ borderRadius: 16, overflow: "hidden" }}
            >
                <SwiperSlide>
                    <div className="relative w-full">
                        <img
                            src={Hero1.src}
                            alt="Slide 1"
                            className="w-full h-auto object-cover max-h-[80vh]"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-end">
                            <div className="w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 sm:p-6 md:p-8">
                                <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold">Viaja cómodo y seguro, directo a tu destino.</h2>
                                <p className="text-white/90 text-sm sm:text-base mt-1">Transporte de personas con recogida y entrega en la puerta de tu casa.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full">
                        <img
                            src={Hero2.src}
                            alt="Slide 2"
                            className="w-full h-auto object-cover max-h-[80vh]"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-end">
                            <div className="w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 sm:p-6 md:p-8">
                                <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold">Soluciones de transporte para tu empresa.</h2>
                                <p className="text-white/90 text-sm sm:text-base mt-1">Traslados corporativos confiables y puntuales para tu equipo de trabajo.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full">
                        <img
                            src={Hero3.src}
                            alt="Slide 3"
                            className="w-full h-auto object-cover max-h-[80vh]"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-end">
                            <div className="w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 sm:p-6 md:p-8">
                                <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold">Tus paquetes llegan seguros y a tiempo.</h2>
                                <p className="text-white/90 text-sm sm:text-base mt-1">Servicio puerta a puerta de encomiendas en toda la Costa Caribe.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full">
                        <img
                            src={Hero4.src}
                            alt="Slide 4"
                            className="w-full h-auto object-cover max-h-[80vh]"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-end">
                            <div className="w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 sm:p-6 md:p-8">
                                <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold">Descubre la Costa Caribe con nosotros.</h2>
                                <p className="text-white/90 text-sm sm:text-base mt-1">City tours a los principales destinos turísticos de la región.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full">
                        <img
                            src={Hero5.src}
                            alt="Slide 5"
                            className="w-full h-auto object-cover max-h-[80vh]"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-end">
                            <div className="w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 sm:p-6 md:p-8">
                                <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold">Tu tranquilidad es nuestra prioridad.</h2>
                                <p className="text-white/90 text-sm sm:text-base mt-1">Personal capacitado y un servicio confiable para pasajeros y encomiendas en toda la Costa Caribe.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CarouselReact
