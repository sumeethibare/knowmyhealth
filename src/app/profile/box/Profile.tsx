import React from 'react';
import Image from 'next/image';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

interface ProfileProps {
    given_name: string;
    family_name: string;
    picture: string | null;
}

const Profile: React.FC<ProfileProps> = ({ given_name, family_name, picture }) => {
    // Ensure the given_name and family_name are not undefined or empty
    const initials = `${given_name?.[0] || ''}${family_name?.[0] || ''}`.toUpperCase();

    return (
        <div className="p-20 w-auto flex px-24 justify-center relative">
            <div className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
                <div className="mr-10">
                    {picture ? (
                        <Image
                            className="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
                            src={picture}
                            alt="User profile image"
                            width={300}
                            height={300}
                        />
                    ) : (
                        <div className="bg-gray-200 w-[300px] h-[300px] flex items-center justify-center text-xl text-black font-bold">
                            {initials}
                        </div>
                    )}
                </div>
                <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
                    <h1 className="text-black font-bold text-3xl mt-6 mb-8">
                        {`${given_name} ${family_name}`}
                    </h1>
                </div>
            </div>
        </div>
    );
};

// Server-side fetching
export const getServerSideProps = async () => {
    const { getUser } = getKindeServerSession();
    let userData = null;

    try {
        const user = await getUser();
        if (user) {
            userData = {
                given_name: user.given_name || '',
                family_name: user.family_name || '',
                picture: user.picture || null,
            };
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }

    return {
        props: userData || {}, // Return empty props if no user data
    };
};

export default Profile;
