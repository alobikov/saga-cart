import React from 'react';
import {IUser} from '../types/types'

interface UserInfoProps {
    user: IUser
}

const UserInfo: React.FC<UserInfoProps> = ({user}) => {
    return (
        <>
            {user.id ?
                <div>
                    <div>{user.name}</div>
                    <div>{user.address1}</div>
                    <div>{user.phone}</div>
                </div>
                : <div>User data not loaded</div>
            }
        </>
    );
};

export default UserInfo;
