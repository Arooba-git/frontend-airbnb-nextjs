import Image from "next/image";
import { PropertyType } from "../myproperties/page";
import { useRouter } from "next/navigation";
import FavoriteButton from "./FavoriteButton";


interface PropertyProps {
    property: PropertyType,
    markFavorite: (isFavorite:boolean) => void
}

export default function Property({ property, markFavorite }: PropertyProps) {
    const router = useRouter();

    return(
        <div className="cursor-pointer" onClick={() => router.push(`/properties/${property.id}`)}>
            <div className="relative overflow-hidden aspect-square rounded-xl">
                {markFavorite && <FavoriteButton
                    id={property.id}
                    isFavorite={property.isFavorite}
                    markFavorite={(isFavorite:boolean) => markFavorite(isFavorite)} />
                }
                <Image
                    fill
                    src={property?.image_url}
                    alt="beach house"
                    sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                    className="hover:scale-110 object-cover transition h-full w-full" />
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">{property.title}</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500">${property.price_per_night} per night</p>
            </div>
        </div>
    );
}
