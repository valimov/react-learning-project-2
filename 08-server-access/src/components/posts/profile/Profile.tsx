import { useEffect } from 'react';
import profileService from '../../../services/profile'
import './Profile.css'

export default function Profile() {
  profileService.getProfile()
  useEffect(() => {
    (async () => {
      const profile =await profileService.getProfile();
      console.log(profile);
    })();
  }, []);
  return (
    <div className ='Profile'>
        Profile
        </div>
  )
}