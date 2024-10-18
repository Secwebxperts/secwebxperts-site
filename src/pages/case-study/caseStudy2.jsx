const CaseStudy2 = () => {
  return (
    <div className="pt-20 container mx-auto max-w-[1700px]">
      <div className="w-full h-auto">
        <img
          src="/case_study/skin_firts/img1.png"
          alt="Case Study"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="bg-[url('/case_study/BG-2.png')] bg-cover bg-center">
        <div className="min-h-[322px] p-10 max-w-[1300px] mx-auto">
          <div>
            <h2 className="font-[600] text-[#FF9D00] text-[36px] font-poppins">
              PROJECT OVERVIEW
            </h2>
            <p className="text-[#546E7A] text-[16px] font-poppins">
              SKIN FIRST is a mobile app providing personalized skincare
              routines and product recommendations to improve users' skin
              health.
            </p>
          </div>
          <div className="max-w-[840px]">
            <h2 className="text-[20px] font[500] text-[#1C1C1C] pt-10 font-poppins">
              Objective
            </h2>
            <div className="flex items-center my-4">
              <div className="w-3 h-3 bg-[#FF9D00] rounded-full"></div>
              <p className="text-[#546E7A] ps-4 text-[16px] font-poppins">
                <span className="font-[600] text-[#1C1C1C]">
                  Client/Company:
                </span>{" "}
                SKIN FIRST
              </p>
            </div>
            <div className="flex items-center my-4">
              <div className="w-3 h-3 bg-[#FF9D00] rounded-full"></div>
              <p className="text-[#546E7A] ps-4 text-[16px] font-poppins">
                <span className="font-[600] text-[#1C1C1C]">
                  Project Duration:
                </span>{" "}
                (Specify time period)
              </p>
            </div>
            <div className="flex items-center my-4">
              <div className="w-3 h-3 bg-[#FF9D00] rounded-full"></div>
              <p className="text-[#546E7A] ps-4 text-[16px] font-poppins">
                <span className="font-[600] text-[#1C1C1C]">Team: </span>
                (Include roles such as UI/UX designer, developer, project
                manager, etc.)
              </p>
            </div>
            <div className="flex items-center my-4">
              <div className="w-3 h-3 bg-[#FF9D00] rounded-full"></div>
              <p className="text-[#546E7A] ps-4 text-[16px] font-poppins">
                <span className="font-[600] text-[#1C1C1C]">Tools Used: </span>
                Figma, Adobe XD, Sketch, InVision, etc.
              </p>
            </div>
            <div className="flex items-center my-4">
              <div className="w-3 h-3 bg-[#FF9D00] rounded-full"></div>
              <p className="text-[#546E7A] ps-4 text-[16px] font-poppins">
                <span className="font-[600] text-[#1C1C1C]">Platform: </span>
                iOS, Android
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* goal */}
      <div className="bg-[url('/case_study/skin_firts/bg-1.png')] bg-cover bg-center">
        <div className="max-w-[1300px] mx-auto">
          <div>
            <h2 className="font-[600] text-[#FF9D00] text-[36px] font-poppins">
              GOAL
            </h2>
            <p className="text-[#546E7A] text-[16px] font-poppins">
              The SKIN FIRST mobile app was designed to empower users with
              personalized skincare routines and product recommendations. The
              app analyzes skin types, concerns, and goals to offer tailored
              advice, reminders, and skincare education.
            </p>
          </div>
          <div className="max-w-[840px]">
            <h2 className="text-[20px] font[500] text-[#1C1C1C] pt-10 font-poppins">
              Primary Goals
            </h2>
            <div className="flex items-center my-4">
              <div className="w-3 h-3 bg-[#FF9D00] rounded-full"></div>
              <p className="text-[#546E7A] ps-4 text-[16px] font-poppins">
                Provide a personalized skincare routine based on user inputs.
              </p>
            </div>
            <div className="flex items-center my-4">
              <div className="w-3 h-3 bg-[#FF9D00] rounded-full"></div>
              <p className="text-[#546E7A] ps-4 text-[16px] font-poppins">
                Recommend relevant products based on the skin’s characteristics.
              </p>
            </div>
            <div className="flex items-center my-4">
              <div className="w-3 h-3 bg-[#FF9D00] rounded-full"></div>
              <p className="text-[#546E7A] ps-4 text-[16px] font-poppins">
                Track users’ skincare progress over time.
              </p>
            </div>
            <div className="flex items-center my-4">
              <div className="w-3 h-3 bg-[#FF9D00] rounded-full"></div>
              <p className="text-[#546E7A] ps-4 text-[16px] font-poppins">
                Deliver educational content related to skincare.
              </p>
            </div>
            <div className="flex items-center my-4">
              <div className="w-3 h-3 bg-[#FF9D00] rounded-full"></div>
              <p className="text-[#546E7A] ps-4 text-[16px] font-poppins">
                Offer a seamless, user-friendly experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* problem statement */}
      <div className="bg-[#F9F9F9]">
        <div className="container mx-auto pt-24 px-4 max-w-[1300px]">
          <div>
            <h2 className="text-[#FF9D00] text-4xl font-bold mb-6">
              Problem Statement
            </h2>
            <p className="text-[16px] text-[#546E7A]">
              Many users struggle with understanding their skin needs, selecting
              the right products, and maintaining routines. SKIN FIRST solves
              this through personalized skincare advice, routine tracking, and
              tailored product recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div>
              <h3 className="text-[20px] font-[500] mb-4 text-[#1C1C1C] font-poppins">
                Key Objectives
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">
                      Personalized skincare advice:
                    </strong>{" "}
                    Users often find it hard to determine what works for their
                    skin.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">
                      Routine management:
                    </strong>{" "}
                    Users need reminders and guidance to stay consistent with
                    their skincare routine.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">
                      Skin health tracking:
                    </strong>{" "}
                    Many people are unaware of changes in their skin condition.
                  </p>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="relative">
              <img
                src="/case_study/skin_firts/img2.png" // replace this with your image path
                alt="Solution"
                className="w-full h-auto "
              />
              {/* Optional dotted background effect */}
              <div
                className="absolute bottom-0 right-0 w-24 h-24 bg-no-repeat"
                style={{ backgroundImage: 'url("/path-to-dots-pattern.png")' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* target audience */}
      <div className="bg-[#F9F9F9] my-6">
        <div className="container mx-auto pt-24 px-4 max-w-[1300px]">
          <div>
            <h2 className="text-[#FF9D00] text-4xl font-bold mb-6">
              Target Audience
            </h2>
            <p className="text-[16px] text-[#546E7A]">
              The target audience for SKIN FIRST includes individuals aged 18–40
              who are interested in skincare, ranging from beginners to
              enthusiasts, seeking personalized routines, product
              recommendations, and skin health tracking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-10">
            {/* Image Section */}
            <div className="relative">
              <img
                src="/case_study/skin_firts/img3.png" // replace this with your image path
                alt="Solution"
                className="w-full h-auto "
              />
              {/* Optional dotted background effect */}
              <div
                className="absolute bottom-0 right-0 w-24 h-24 bg-no-repeat"
                style={{ backgroundImage: 'url("/path-to-dots-pattern.png")' }}
              ></div>
            </div>
            {/* Text Section */}
            <div>
              <h3 className="text-[20px] font-[500] mb-4 text-[#1C1C1C] font-poppins">
                Key Priorities
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                  <p className="text-[#546E7A] text-[16px]">
                    Individuals aged 18–40 who care about skin health.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                  <p className="text-[#546E7A] text-[16px]">
                    Both beginners and experienced users of skincare products.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                  <p className="text-[#546E7A] text-[16px]">
                    Users interested in receiving personalized advice, tracking
                    skin changes, and accessing trusted product recommendations.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* design process */}
      <div className="bg-[#F9F9F9]">
        <div className="container mx-auto pt-24 px-4">
          {/* Title and Description */}
          <div className="mb-12 max-w-[1300px] mx-auto">
            <h2 className="text-[#FF9D00] text-[36px] font-[600] mb-6 uppercase font-poppins">
              Design Process
            </h2>
            <p className="text-[16px] text-[#546E7A]  ">
              The Design Process is a structured series of steps that designers
              follow to develop solutions to problems. It is a systematic
              approach that involves researching, brainstorming, prototyping,
              and testing to create effective and user-centered solutions for a
              product or service.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/case_study/skin_firts/img4.png" // Replace with your image path
              alt="Mobile UI Mockups"
              className="w-full max-w-[500px] h-auto "
            />
          </div>
          {/* research section*/}
          <div className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-[1300px]">
            <div className="flex-1 space-y-12">
              <div>
                <h3 className="text-[20px] font-[500] mb-4">
                  Research & User Insights
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                    <p className="text-[16px] font-[300] text-[#546E7A]">
                      <strong className="text-[#1C1C1C] font-[500]">
                        User Interviews & Surveys:
                      </strong>{" "}
                      Conducted interviews with skincare enthusiasts to
                      understand their pain points, routines, and preferences.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                    <p className="text-[16px] font-[300] text-[#546E7A]">
                      <strong className="text-[#1C1C1C] font-[500]">
                        Competitor Analysis:
                      </strong>{" "}
                      Analyzed existing skincare apps like SkinVision and
                      TroveSkin to identify gaps and opportunities.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                    <p className="text-[16px] font-[300] text-[#546E7A]">
                      <strong className="text-[#1C1C1C] font-[500]">
                        {" "}
                        Personas & User Journeys:
                      </strong>{" "}
                      Created personas for different user types, such as
                      beginners, skincare enthusiasts, and users with specific
                      skin conditions.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/case_study/skin_firts/img5.png" // Replace with your image path
                alt="Mobile UI Mockups"
                className="w-full max-w-[500px] h-auto "
              />
            </div>
          </div>
          {/* wireframing  */}
          <div className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-[1300px]">
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/case_study/skin_firts/img6.png" // Replace with your image path
                alt="Mobile UI Mockups"
                className="w-full max-w-[500px] h-auto "
              />
            </div>
            <div className="flex-1 space-y-12">
              <div>
                <h3 className="text-[20px] font-[500] mb-4">
                  Wireframing & User Flow
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                    <p className="text-[16px] font-[300] text-[#546E7A]">
                      Developed low-fidelity wireframes to outline essential app
                      functionalities like:
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                    <p className="text-[16px] font-[300] text-[#546E7A]">
                      <strong className="text-[#1C1C1C] font-[500]">
                        Skin quiz:{" "}
                      </strong>{" "}
                      To capture users' skin type and concerns.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                    <p className="text-[16px] font-[300] text-[#546E7A]">
                      <strong className="text-[#1C1C1C] font-[500]">
                        {" "}
                        Product recommendation section:{" "}
                      </strong>{" "}
                      Integrated with a database of skincare products.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                    <p className="text-[16px] font-[300] text-[#546E7A]">
                      <strong className="text-[#1C1C1C] font-[500]">
                        {" "}
                        Progress visualizer:{" "}
                      </strong>{" "}
                      To track skin condition improvements over time.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                    <p className="text-[16px] font-[300] text-[#546E7A]">
                      <strong className="text-[#1C1C1C] font-[500]">
                        {" "}
                        Routine tracker:{" "}
                      </strong>{" "}
                      To help users manage their skincare routine.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ui design  */}
          <div className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-[1300px]">
            <div className="flex-1 space-y-12">
              <div>
                <h3 className="text-[20px] font-[500] mb-4">UI Design</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                    <p className="text-[16px] font-[300] text-[#546E7A]">
                      <strong className="text-[#1C1C1C] font-[500]">
                        Color Palette:{" "}
                      </strong>{" "}
                      Soft, calming colors like pastels and neutrals were chosen
                      to reflect a clean and health-focused brand image.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                    <p className="text-[16px] font-[300] text-[#546E7A]">
                      <strong className="text-[#1C1C1C] font-[500]">
                        Typography:{" "}
                      </strong>{" "}
                      Selected fonts that are modern, legible, and easy on the
                      eyes.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                    <p className="text-[16px] font-[300] text-[#546E7A]">
                      <strong className="text-[#1C1C1C] font-[500]">
                        Iconography & Imagery:{" "}
                      </strong>{" "}
                      Used custom icons and soothing visuals to guide users
                      intuitively through the app.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/case_study/skin_firts/img7.png" // Replace with your image path
                alt="Mobile UI Mockups"
                className="w-full max-w-[500px] h-auto "
              />
            </div>
          </div>
          {/* prototyping */}
          <div className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-[1300px]">
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/case_study/skin_firts/img8.png" // Replace with your image path
                alt="Mobile UI Mockups"
                className="w-full max-w-[500px] h-auto "
              />
            </div>
            <div className="flex-1 space-y-12">
              <div>
                <h3 className="text-[20px] font-[500] mb-4">Prototyping</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                    <p className="text-[16px] font-[300] text-[#546E7A]">
                      Created a high-fidelity prototype in Figma/InVision to
                      simulate the user experience.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                    <p className="text-[16px] font-[300] text-[#546E7A]">
                      Conducted usability testing to identify pain points and
                      refine the design.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* User testing and feedback  */}
          <div className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-[1300px]">
            <div className="flex-1 space-y-12">
              <div>
                <h3 className="text-[20px] font-[500] mb-4">
                  User Testing & Feedback
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                    <p className="text-[16px] font-[300] text-[#546E7A]">
                      Gathered feedback from a group of beta users to test the
                      app’s usability and functionality.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                    <p className="text-[16px] font-[300] text-[#546E7A]">
                      Iterated on the design based on insights, improving
                      features like navigation, onboarding, and skin analysis.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/case_study/skin_firts/img9.png" // Replace with your image path
                alt="Mobile UI Mockups"
                className="w-full max-w-[500px] h-auto "
              />
            </div>
          </div>
        </div>
      </div>
      {/* key fetures */}
      <div className="bg-[#F9F9F9]">
        <div className="container mx-auto pt-24 px-4 max-w-[1300px]">
          <div>
            <h2 className="text-[#FF9D00] text-4xl font-bold mb-6">
              Key Features
            </h2>
            <p className="text-[16px] text-[#546E7A]">
              Key Features are the main functionalities or attributes of a
              product that provide significant value to users and distinguish it
              from competitors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">Skin Type Quiz: </strong>{" "}
                    Users answer a few questions to determine their skin type
                    and concerns.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">
                      Personalized Routine:
                    </strong>{" "}
                    The app generates a daily skincare routine with product
                    recommendations tailored to the user’s skin profile.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">
                      Skincare Journal:
                    </strong>{" "}
                    Users can log daily entries to track how their skin responds
                    to products and routines.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">
                      Progress Tracking:
                    </strong>{" "}
                    Visual graphs show improvements or changes in skin over time
                    based on daily inputs and skin photos.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">
                      Push Notifications:
                    </strong>{" "}
                    Push Notifications: Reminder system to ensure users stay
                    consistent with their routine.
                  </p>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="relative">
              <img
                src="/case_study/skin_firts/img10.png" // replace this with your image path
                alt="Solution"
                className="w-full h-auto "
              />
              {/* Optional dotted background effect */}
              <div
                className="absolute bottom-0 right-0 w-24 h-24 bg-no-repeat"
                style={{ backgroundImage: 'url("/path-to-dots-pattern.png")' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* results */}
      <div className="bg-[#F9F9F9] my-6">
        <div className="container mx-auto pt-24 px-4 max-w-[1300px]">
          <div>
            <h2 className="text-[#FF9D00] text-4xl font-bold mb-6">Results</h2>
            <p className="text-[16px] text-[#546E7A]">
              Results refer to the outcomes or impacts achieved after
              implementing a project, highlighting the effectiveness and success
              of the efforts made.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-10">
            {/* Image Section */}
            <div className="relative">
              <img
                src="/case_study/skin_firts/img11.png" // replace this with your image path
                alt="not extracted"
                className="w-full h-auto "
              />
              {/* Optional dotted background effect */}
              <div
                className="absolute bottom-0 right-0 w-24 h-24 bg-no-repeat"
                style={{ backgroundImage: 'url("/path-to-dots-pattern.png")' }}
              ></div>
            </div>
            {/* Text Section */}
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">
                      {" "}
                      Increased Engagement:{" "}
                    </strong>{" "}
                    Users spent an average of 15 minutes per session on the app,
                    checking routines and tracking progress.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">
                      Positive Feedback:
                    </strong>{" "}
                    Over 85% of beta testers reported that the app helped them
                    better understand their skincare needs.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">
                      High Retention Rate:
                    </strong>{" "}
                    70% of users continued using the app after 1 month of
                    launch.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
                  <p className="text-[#546E7A] text-[16px]">
                    <strong className="text-[#1C1C1C]">
                      Product Conversion:
                    </strong>{" "}
                    40% of users purchased recommended products via affiliate
                    links within the app.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* conclusion */}
      <div className="bg-[#F9F9F9] p-10">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[#FF9D00] text-[36px] font-[600]">CONCLUSION</h2>
          <p className="text-[#546E7A] text-[16px] font-[400] py-4">
            Conclusion is a summary that encapsulates the main findings,
            insights, and implications of a project, reinforcing its
            significance and outcomes.
          </p>
          <ul>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-[#FF9D00] rounded-full mr-3 mt-1"></span>
              <p className="text-[#546E7A] font-[300] text-[16px]">
                SKIN FIRST successfully addressed users' needs by providing
                personalized skincare routines and tracking, resulting in high
                engagement and positive feedback. Its design focused on
                simplicity, personalization, and education, making it a valuable
                tool for users looking to improve their skin health.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy2;
