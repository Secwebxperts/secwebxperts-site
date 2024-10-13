const CaseStudy = () => {
  return (
    <div className="pt-24 container mx-auto max-w-[1700px]">
      <div className="h-[500px] bg-pink-50 max-w-[1300px] mx-auto">
        <h1 className="uppercase text-[#012169] text-[64px] font-[600] font-poppins">
          hr Recruitment
        </h1>
        <p className="text-[16px] font-[500] font-poppins leading-6 max-w-[420px] ">
          HR recruitment focuses on finding and hiring the right talent for an
          organization, involving job posting, candidate sourcing, interviews,
          and selection. It ensures a smooth hiring process and a strong talent
          match.
        </p>
      </div>
      <div className="min-h-[322px] p-10 max-w-[1300px] mx-auto">
        <div>
          <h2 className="font-[600] text-[#FF9D00] text-[36px] font-poppins">
            PROJECT OVERVIEW
          </h2>
          <p className="text-[#546E7A] text-[16px] font-poppins">
            A project overview summarizes the goals, scope, timeline, & key
            deliverables, offering a quick snapshot of the project's purpose and
            progress.
          </p>
        </div>
        <div className="max-w-[840px]">
          <h2 className="text-[20px] font[500] text-[#1C1C1C] pt-10 font-poppins">
            Objective
          </h2>
          <div className="flex items-center my-4">
            <div className="w-3 h-3 bg-[#FF9D00] rounded-full"></div>
            <p className="text-[#546E7A] ps-4 text-[16px] font-poppins">
              <span className="font-[600] text-[#1C1C1C]">Objective:</span>{" "}
              Design an intuitive and efficient HR recruitment platform that
              caters to both job seekers and recruiters.
            </p>
          </div>
          <div className="flex items-center my-4">
            <div className="w-3 h-3 bg-[#FF9D00] rounded-full"></div>
            <p className="text-[#546E7A] ps-4 text-[16px] font-poppins">
              <span className="font-[600] text-[#1C1C1C]">Job seekres:</span>{" "}
              People looking for jobs, both freshers and experienced
              professionals.
            </p>
          </div>
          <div className="flex items-center my-4">
            <div className="w-3 h-3 bg-[#FF9D00] rounded-full"></div>
            <p className="text-[#546E7A] ps-4 text-[16px] font-poppins">
              <span className="font-[600] text-[#1C1C1C]">
                Recruiters/HR professionals :
              </span>
              People managing job postings, applications, and the hiring
              process.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-8 max-w-[1300px] mx-auto">
        {/* Left Side - Text Content */}
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold text-[#FF9D00] mb-4">
            RESEARCH PHASE
          </h1>
          <p className="text-[#546E7A] mb-6 text-[16px]">
            The research phase gathers insights to define project goals and
            explore solutions, guiding informed planning.
          </p>

          <div className="mb-6">
            <h2 className="text-[20px] font-[500] text-[#1C1C1C] mb-2">
              User Personas
            </h2>
            <ul className="list-none space-y-2">
              <li className="flex items-start">
                <span className="text-[#FF9D00] mr-2">●</span>
                <p className="text-[#546E7A] text-[16px]">
                  <strong className="text-[#1C1C1C]">Needs:</strong> Easy
                  navigation, clear job descriptions, and simple application
                  processes.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9D00] mr-2">●</span>
                <p className="text-[#546E7A] text-[16px]">
                  <strong className="text-[#1C1C1C]">Pain Points:</strong>{" "}
                  Lengthy applications, unclear job roles, or difficult user
                  interfaces.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] font-[500] text-[#1C1C1C] mb-2">
              Competitor Analysis
            </h2>
            <ul className="list-none space-y-2">
              <li className="flex items-start">
                <span className="text-[#FF9D00] mr-2">●</span>
                <p className="text-[#546E7A] text-[16px]">
                  Evaluate existing HR platforms (e.g., LinkedIn, Indeed,
                  Workday) to identify strengths and weaknesses.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9D00] mr-2">●</span>
                <p className="text-[#546E7A] text-[16px]">
                  Identify gaps or areas of improvement, such as lack of
                  personalization, slow application processes, or poor filtering
                  mechanisms.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 py-10 md:py-0">
          <img
            src="case_study/img1.png"
            alt="Research Phase"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center p-8 bg-[#F9F9F9]">
        {/* Heading and Description */}
        {/* Content - Image and Text Side by Side */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full  max-w-[1300px] mx-auto">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-[#FF9D00] mb-4">
                USER FLOW AND WIREFRAMING
              </h1>
              <p className="text-[#546E7A] text-[16px]">
                User flow illustrates the user's journey, while wireframing
                outlines interface layouts, together shaping the user
                experience.
              </p>
            </div>
            <img
              src="case_study/img2.png" // Replace with your image path
              alt="Wireframe Example"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="lg:w-1/2 w-full max-w-lg">
            {/* Wireframes Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Wireframes
              </h2>
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FF9D00] mr-2">●</span>
                  <p className="text-[#546E7A] text-[16px]">
                    Develop low-fidelity wireframes for key screens (Job Search,
                    Job Listing, Application Form, Recruiter Dashboard).
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF9D00] mr-2">●</span>
                  <p className="text-[#546E7A] text-[16px]">
                    Annotate wireframes with UX decisions (e.g., why a specific
                    button placement improves usability).
                  </p>
                </li>
              </ul>
            </div>

            {/* Job Seeker Flow Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Job Seeker Flow
              </h2>
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FF9D00] mr-2">●</span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">Login/Register:</strong>{" "}
                    Easy account creation via email, social logins, or LinkedIn.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF9D00] mr-2">●</span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">Job Search:</strong>{" "}
                    Filters (location, job type, salary range), search bar, and
                    job categories.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF9D00] mr-2">●</span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">Job Application:</strong>{" "}
                    Clear job descriptions, one-click apply with saved resumes,
                    or detailed application forms.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF9D00] mr-2">●</span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">
                      {" "}
                      Application Tracking:
                    </strong>{" "}
                    A dashboard showing application status (e.g., Applied, In
                    Review, Rejected).
                  </p>
                </li>
              </ul>
            </div>

            {/* Recruiter Flow Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Recruiter Flow
              </h2>
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FF9D00] mr-2">●</span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">Post a Job:</strong>{" "}
                    Simple job posting forms with templates for job titles,
                    descriptions, requirements.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF9D00] mr-2">●</span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">
                      View Applications:
                    </strong>{" "}
                    Filter applicants by skills, experience, education.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF9D00] mr-2">●</span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">
                      Schedule Interviews:
                    </strong>{" "}
                    Integrated scheduling tools, calendar syncing, interview
                    invites.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] my-6">
        <div className="flex flex-col items-center  max-w-[1300px] m-auto p-7">
          {/* Heading and Description */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#FF9D00] mb-4">
              VISUAL DESIGN
            </h1>
            <p className="text-[#546E7A] max-w-[600px]">
              Visual design emphasizes aesthetics through color, typography, and
              imagery to enhance usability and user experience.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full flex justify-center mb-8">
            <img
              src="case_study/img3.png" // Replace with your image path
              alt="Visual Design Example"
              className="max-w-full h-auto object-cover"
            />
          </div>

          {/* Branding and Key Design Elements Section */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start">
            {/* Branding Section */}
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0 px-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Branding
              </h2>
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FF9D00] mr-2">●</span>
                  <p className="text-[#546E7A]">
                    Use colors, fonts, and styles that resonate with both
                    professionalism and approachability.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF9D00] mr-2">●</span>
                  <p className="text-[#546E7A]">
                    Define a clear visual hierarchy: job titles and CTAs (calls
                    to action) should stand out.
                  </p>
                </li>
              </ul>
            </div>

            {/* Key Design Elements Section */}
            <div className="lg:w-1/2 w-full px-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Key Design Elements
              </h2>
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FF9D00] mr-2">●</span>
                  <p className="text-[#546E7A]">
                    <strong className="text-[#1C1C1C]">Navigation Bar:</strong>{" "}
                    Simple, with key sections like “Job Search,” “My
                    Applications,” “Post a Job,” “Manage Jobs.”
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF9D00] mr-2">●</span>
                  <p className="text-[#546E7A]">
                    <strong className="text-[#1C1C1C]">Job Listings:</strong>{" "}
                    Cards or list format with key job details (title, location,
                    salary) easily scannable.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF9D00] mr-2">●</span>
                  <p className="text-[#546E7A]">
                    <strong className="text-[#1C1C1C]">
                      Application Form:
                    </strong>{" "}
                    Clean, minimalistic, and user-friendly with a progress
                    indicator.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9]">
        <div className="flex flex-col lg:flex-row items-center justify-between  py-10 px-5  max-w-[1300px] mx-auto">
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="case_study/img4.png"
              alt="Interactive Prototype Diagram"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>

          {/* Right Side Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:ml-10">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#FF9D00] mb-5">
              INTERACTIVE PROTOTYPE
            </h2>
            <p className="text-[#546E7A] text-base text-[16px] mb-5">
              An interactive prototype simulates a product's features, enabling
              user engagement and feedback before development.
            </p>
            <ul className="list-none space-y-3 text-[#546E7A] text-base ">
              <li className="flex items-start text-[#546E7A] text-[16px]">
                <span className="text-[#FF9D00] mr-2">•</span>
                Evaluate existing HR platforms (e.g., LinkedIn, Indeed, Workday)
                to identify strengths and weaknesses.
              </li>
              <li className="flex items-start text-[#546E7A] text-[16px]">
                <span className="text-[#FF9D00] mr-2">•</span>
                Ensure smooth transitions, easy-to-access interactions (e.g.,
                hover states, clickable elements).
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9]">
        <div className=" mx-auto my-10 p-6 max-w-[1300px] ">
          {/* Title */}
          <h2 className="text-[#FF9D00] text-[36px] font-[600] mb-2 font-poppins">
            CONCLUSION
          </h2>

          {/* Sub-heading */}
          <p className="text-[#546E7A] text-[16px] mb-6 font-poppins">
            The conclusion summarizes findings, reflects on the project’s
            impact, and offers recommendations for future steps.
          </p>

          {/* Bullet point section */}
          <div className="flex justify-start items-center text-left">
            {/* Dot */}
            <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-3"></span>
            {/* Text */}
            <p className="text-[16px] font-[300] text-[#546E7A] max-w-6xl">
              By focusing on a user-centered design approach and conducting
              thorough testing, the recruitment website should offer a seamless
              experience for both job seekers and recruiters. The platform
              should be scalable, intuitive, and responsive to cater to
              different user needs and devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
