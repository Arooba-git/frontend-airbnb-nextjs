'use client';

import {  useEffect, useState } from 'react';
import Property from '../components/Property';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchQueryType } from '../components/modals/SearchModal';
import { format } from 'date-fns';
import Categories from '../components/Categories';

export type PropertyType = {
    isFavorite: boolean;
    id: string,
    title: string,
    price_per_night: number,
    image_url: string
}

function Properties({landlordId} : any) {
    const [properties, setProperties] = useState<PropertyType[]>([]);
    const router = useRouter(); 
    let params = useSearchParams();
    const searchData = params.get('searchData') as string;

    function markThisAsFav(id: string, isFavorite: boolean) {
        const propertiesWithFavoriteStatus = properties.map((property) => {
            if (id == property.id) {
                property.isFavorite = isFavorite;
            }

            if (isFavorite) {
                console.log('marked as favorite');
            } else {
                console.log('removed from favorites');
            }

            return property;
        })

        setProperties(propertiesWithFavoriteStatus);
    }

    useEffect(() => {
        async function fetchData() {
            await getProperties();
        }
        fetchData();

    }, [params])

    return (
    <div>
        <Categories />
        <div className="grid grid-cols-2 gap-6">
        {
            properties?.map((property) => { return  <Property
                    markFavorite={(isFavorite:boolean) => markThisAsFav(property.id, isFavorite)}
                    key={property.id}
                    property={property}
                />
            })
        }
        </div>
    </div>
    )

    async function getProperties() {
        let url = `/api/properties/`;

        if (landlordId) {
            url += `?landlord_id=${landlordId}`;
        } else {
            let apiURL = '&favorites=true';

            if (searchData) {
                const searchQuery: SearchQueryType = JSON.parse(searchData);
                const { country, checkin, checkout, guests, bathrooms, bedrooms, category } = searchQuery;
            
                if (country) {
                    apiURL += `&country=${country}`;
                }

                if (category) {
                    apiURL += `&category=${category}`;
                }

                if (checkin) {
                    apiURL += `&checkIn=${format(checkin, 'yyyy-MM-dd')}`;
                }

                if (checkout) {
                    apiURL += `&checkOut=${format(checkout, 'yyyy-MM-dd') }`;
                }

                if (guests) {
                    apiURL += `&numGuests=${guests}`;
                }

                if (bathrooms) {
                    apiURL += `&numBathrooms=${bathrooms}`;
                }

                if (bedrooms) {
                    apiURL += `&numBedrooms=${bedrooms}`;
                }
            }

            if (apiURL) {
                apiURL = `?` + apiURL.substring(1);
                url += apiURL;
            }
        }

        const apiService = (await import('../services/apiService')).default
        const { properties, favorites }: any  = await apiService.get(url);

        const propertiesWithFavoriteStatus = properties?.map((property: any) => {
            if (favorites.find((favoriteProperty :any) => {
               
                return favoriteProperty.id === property?.id
            })) {
                
                property.isFavorite = true;
            } else {
                property.isFavorite = false;
            }

            return property;
        });

        setProperties(propertiesWithFavoriteStatus);
    }
}

export default Properties;