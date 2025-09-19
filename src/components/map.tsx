import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

const Mapa = () => {
    useEffect(() => {
        // Importar Leaflet dinámicamente para evitar SSR
        let mapInstance: any = null;
        let resizeHandler: any = null;

        import("leaflet").then((L) => {
            const cities: Record<string, [number, number]> = {
                Barranquilla: [10.9639, -74.7964],
                Cartagena: [10.3910, -75.4794],
                "Santa Marta": [11.2408, -74.1990],
                Riohacha: [11.5444, -72.9072],
                Sincelejo: [9.3047, -75.3978],
                Montería: [8.74798, -75.8814],
                Maicao: [11.3833, -72.2333],
            };

            mapInstance = L.map("map", { preferCanvas: true }).setView(cities["Barranquilla"], 7);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/">OSM</a>',
            }).addTo(mapInstance);

            // Marcadores
            Object.entries(cities).forEach(([name, coords]) => {
                L.marker(coords).addTo(mapInstance).bindPopup(name);
            });

            // Líneas desde Barranquilla a los otros
            Object.entries(cities).forEach(([name, coords]) => {
                if (name !== "Barranquilla") {
                    L.polyline([cities["Barranquilla"], coords], {
                        color: "#E8782F",
                        weight: 3,
                    }).addTo(mapInstance);
                }
            });

            // Ajustar bounds para que se vean todas las ciudades en pantallas grandes
            try {
                const latlngs = Object.values(cities);
                const bounds = L.latLngBounds(latlngs as any);
                mapInstance.fitBounds(bounds, { padding: [50, 50] });
            } catch (e) {
                // noop
            }

            // Invalidate map size on resize to keep it responsive
            resizeHandler = () => {
                setTimeout(() => {
                    if (mapInstance && mapInstance.invalidateSize) mapInstance.invalidateSize();
                }, 150);
            };

            window.addEventListener('resize', resizeHandler);
        });

        return () => {
            window.removeEventListener('resize', resizeHandler);
            if (mapInstance) {
                try { mapInstance.remove(); } catch (e) { /* noop */ }
            }
        };
    }, []);

    // Responsive heights: small screens shorter, larger screens take more vertical space
    return <div id="map" className="w-full rounded-xl shadow-lg z-10 h-64 sm:h-80 md:h-[60vh] lg:h-[70vh] xl:h-[75vh]"  />;
};

export default Mapa;
