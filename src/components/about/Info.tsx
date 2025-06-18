import Contact from "../ui/button/Contact"

const Info = () => {
  return (
    <section>
        <p className="text-gray-300 text-lg tracking-wide text-justify leading-relaxed">
            I am a curious and committed web developer with a strong drive to constantly learn new things.
             Over the past three years, I have built up expertise in HTML, CSS, JavaScript, React, Node.js, 
             Express and MongoDB – both through courses and practical projects.
            I have worked in teams according to agile methods with GitHub and SCRUM, often in the role of
             SCRUM Master. In several projects, I have been responsible for both the front-end with reusable
              components and the back-end with APIs and databases.
        </p>
        <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Language Skills</h3>
            <ul className="space-y-4 my-10">
            <li>
                <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-100">Italian</span>
                <span className="text-gray-300 text-sm">Native</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                </div>
            </li>
            <li>
                <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-100">Swedish</span>
                <span className="text-gray-300 text-sm">Very good</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                </div>
            </li>
            <li>
                <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-100">English</span>
                <span className="text-gray-300 text-sm">Fluent</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                </div>
            </li>
            </ul>

        <Contact />
        </div>
    </section>
  )
}

export default Info
