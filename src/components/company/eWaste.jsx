import React from 'react'

const eWaste = () => {
   return (
   <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-danger">Recycle Responsibly with RedSetGo</h1>
        <p className="lead text-secondary mt-3">
          Join our effort in promoting sustainable e-waste management and protecting the environment.
        </p>
      </div>

      {/* What is E-Waste */}
      <div className="mb-5">
        <h3 className="fw-bold text-danger mb-3">What is “E-Waste”?</h3>
        <p>
          According to the <strong>E-Waste (Management) Rules, 2016</strong>, “E-Waste” refers to electrical and 
          electronic equipment, either whole or partially discarded by consumers or bulk users, including rejects 
          from manufacturing, refurbishment, or service processes.
        </p>
        <p>
          This includes devices such as <strong>mobile phones, laptops, televisions, printers, fax machines</strong>, 
          and their components, which have reached the end of their useful life. If not recycled properly, e-waste 
          poses significant environmental and health risks.
        </p>
      </div>

      {/* How Can You Learn More */}
      <div className="mb-5">
        <h3 className="fw-bold text-danger mb-3">How Can You Learn More About Your E-Waste?</h3>
        <p>
          For queries or guidance related to e-waste management, you can <strong>contact RedSetGo’s recycling team</strong> directly.
        </p>
      </div>

      {/* Do’s and Don’ts */}
      <div className="mb-5">
        <h3 className="fw-bold text-danger mb-3">Important Do’s and Don’ts</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">✅ Dispose of your e-waste through RedSetGo’s authorized collection channels.</li>
          <li className="list-group-item">❌ Do not throw e-waste in regular household bins.</li>
          <li className="list-group-item">❌ Do not attempt to dismantle electronic devices at home.</li>
          <li className="list-group-item">❌ Do not sell your e-waste to unauthorized scrap dealers or informal collectors.</li>
          <li className="list-group-item">✅ Store non-functional devices safely in a separate area to prevent accidental damage.</li>
        </ul>
      </div>

      {/* Programs */}
      <div className="mb-5">
        <h3 className="fw-bold text-danger mb-3">Programs for Responsible E-Waste Management</h3>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded-3 bg-light h-100">
              <h5 className="fw-bold text-danger mb-2">Bulk Consumer Program</h5>
              <p>
                Comprehensive e-waste solutions for <strong>offices, schools, hospitals, hotels, banks</strong>, and other organizations, ensuring proper disposal and recycling of electronic equipment.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded-3 bg-light h-100">
              <h5 className="fw-bold text-danger mb-2">Waste Collector Program</h5>
              <p>
                Formalizes <strong>waste pickers and aggregators</strong> as authorized collection channels, promoting transparency and responsible e-waste handling.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded-3 bg-light h-100">
              <h5 className="fw-bold text-danger mb-2">Residential Welfare Associations (RWAs) Program</h5>
              <p>
                Partnerships with <strong>apartment complexes and residential communities</strong> to create dedicated e-waste collection channels, awareness drives, and education on safe disposal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-5">
        <h4 className="fw-bold text-danger mb-3">Join RedSetGo in Building a Sustainable Future</h4>
        <p className="mb-4">
          By recycling responsibly with RedSetGo, you contribute to a cleaner, safer, and greener environment for everyone.
        </p>
        <a href="/contact" className="btn btn-danger px-4 py-2">Contact Us</a>
      </div>
    </div>
  );
}

export default eWaste