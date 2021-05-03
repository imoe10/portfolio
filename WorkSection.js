import React from 'react'
import '../App.css'
import './WorkSection.css'

function WorkSection() {
    return(
        <div className="work-container">
          <h1>Featured Work</h1>
          <p>I lead front-end & back-end development for companies and individuals, building resilient UI foundations, design pattern
               & database architecture to deliever an reliable and optimized web experience.  </p>
          <div className="card-item1">
              <h2>━ SAMS</h2>
              <p>SAMS(Student & Agent Management System) is a software solution for staff and agents of Premium Entrepreneur Consultant Sdn Bhd
                   Malaysia, that allows them to keep students records, manage their applications
                  with Universities and update applications status. The software also provides analysis about number of
                  submitted applications and number of agents registered.
              </p>
              <img src="system.png" alt="system" />
          </div>
          <div className="card-item2">
          <h2>━ Ecommerce</h2>
              <p>Ecommerce is a web application designed and developed to match a university student assignment
                  specifications. The application allows the users to shop online by viewing various products that 
                  are stored in the database. Ecommerce also allows the vendors to add products to their own stores.
              </p>
              <img src="system2.png" alt="system" />
          </div>
          <div className="card-item3">
          <h2>━ UI Design</h2>
              <p> I love designing neat and modern user interface. Here is some of my UI designs.
              </p>
              <img src="design1.png" alt="system" />
          </div>
              <img src="design2.png" alt="system"/>

        </div>
    )
}

export default WorkSection;