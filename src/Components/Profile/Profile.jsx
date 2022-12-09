import React from 'react'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import Email from '../Email/Email'
import Address from '../Address/Address'
import Name from '../Name/Name'
function Profile() {
  return (
    <div>
        Profil start
      <PersonalInfo/>
      <Address/>
      <Name/>
      <Email/>
    </div>
  )
}

export default Profile
