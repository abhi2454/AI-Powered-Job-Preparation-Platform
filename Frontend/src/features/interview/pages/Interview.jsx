import React, { useState } from 'react'
import '../style/interview.scss'

const Interview = () => {
  const [activeSection, setActiveSection] = useState('roadmap')
  const [expandedTechnical, setExpandedTechnical] = useState(null)
  const [expandedBehavioral, setExpandedBehavioral] = useState(null)

  // Mock data - will be replaced with props/API in hooks layer
  const mockData = {
    matchScore: 92,
    skillMessage: 'Strong match for this role',
    skillGaps: [
      { skill: 'Advanced System Design Concepts', severity: 'low' },
      { skill: 'Automated Testing (Unit/Integration) Practices', severity: 'low' }
    ],
    technicalQuestions: [
      {
        question: 'Explain the project you are most proud of from your resume. What was your role, what challenges did you face, and how did you overcome them?',
        intention: 'To assess practical application of skills, problem-solving, and project ownership.',
        answer: 'Candidate should describe one of their projects (e.g., Job Portal Web Application), detailing the technologies used (React.js, Node.js, Express.js, MongoDB), their specific contributions, design choices, and any technical hurdles encountered (e.g., authentication implementation, database schema design, API integration). They should explain their approach to debugging and optimization, and reflect on what they learned.'
      },
      {
        question: 'Given your experience with React.js and Node.js, explain the concept of a RESTful API. How would you design an API endpoint for creating a new job listing in your Job Portal application?',
        intention: 'To evaluate understanding of web architecture, API design principles, and practical application of full-stack knowledge.',
        answer: 'Candidate should define RESTful principles (statelessness, client-server, cacheable, uniform interface). For the job listing endpoint, they should describe the HTTP method (POST), the URL structure (e.g., /api/jobs), the request body (JSON payload with job details), and the expected response (success status, new job ID, or error message). They should mention validation, authentication (JWT), and database interaction.'
      },
      {
        question: 'You\'ve solved 300+ coding problems. Can you walk me through your approach to solving a challenging Data Structures & Algorithms problem? For example, how would you find the shortest path in an unweighted graph?',
        intention: 'To assess DSA problem-solving methodology, thought process, and specific algorithm knowledge.',
        answer: 'Candidate should explain their systematic approach: understanding the problem, identifying appropriate data structures (e.g., adjacency list for graph), choosing an algorithm (Breadth-First Search for shortest path in unweighted graph), explaining its time and space complexity, and discussing edge cases. They should articulate the steps of BFS clearly.'
      },
      {
        question: 'Explain the core principles of Object-Oriented Programming (OOP) and how you applied them in your C++ Student Management System project.',
        intention: 'To gauge understanding of fundamental OOP concepts and their practical implementation.',
        answer: 'Candidate should describe encapsulation, inheritance, polymorphism, and abstraction. They should then relate these principles to their C++ project, e.g., using classes for \'Student\', \'Course\', \'Admin\'; inheritance for different types of users if applicable; polymorphism through virtual functions or method overloading; and abstraction by using access specifiers.'
      },
      {
        question: 'Describe the difference between SQL and NoSQL databases. When would you choose MongoDB (NoSQL) over MySQL (SQL) for a project?',
        intention: 'To evaluate database knowledge and ability to make informed technology choices based on project requirements.',
        answer: 'Candidate should explain the relational nature of SQL (structured, schemas, ACID) versus the non-relational, schema-less nature of NoSQL (flexible, scalable for unstructured data). They should discuss choosing MongoDB for projects requiring high scalability, flexible data models, handling large volumes of unstructured data, or rapid iteration. MySQL would be chosen for projects needing strong data integrity, complex queries, and well-defined relationships.'
      }
    ],
    behavioralQuestions: [
      {
        question: 'Tell me about a time you faced a significant technical challenge in a project or during your internship. How did you approach it, and what was the outcome?',
        intention: 'To assess problem-solving skills, resilience, and learning from difficult situations.',
        answer: 'Candidate should use the STAR method (Situation, Task, Action, Result) to describe a specific technical challenge. They should highlight their analytical process, debugging steps, research, collaboration (if any), and the ultimate resolution. Emphasize the lessons learned and how they\'ve applied those learnings since.'
      },
      {
        question: 'Collaboration is key in software development. Describe an experience where you had to work effectively with a team on a technical project. What was your role, and how did you contribute to the team\'s success?',
        intention: 'To evaluate teamwork, communication, and ability to work in a collaborative environment.',
        answer: 'Candidate should describe a team project (academic or internship). They should clearly outline their specific responsibilities, how they communicated with team members, resolved conflicts or disagreements, and contributed to the overall project goals. Focus on examples of active listening, constructive feedback, and shared success.'
      },
      {
        question: 'The tech landscape is constantly evolving. How do you stay updated with new technologies and programming practices? Can you give an example of a new technology you\'ve learned recently and why?',
        intention: 'To assess proactiveness, continuous learning, and adaptability.',
        answer: 'Candidate should discuss their methods for learning (online courses, blogs, documentation, side projects, conferences). They should provide a specific example of a technology or concept they recently learned (e.g., a new React hook, a specific Node.js library, or a cloud service) and explain the motivation behind learning it and how they applied it.'
      }
    ],
    roadMap: [
      {
        day: 1,
        focus: 'Data Structures & Algorithms (DSA)',
        tasks: [
          'Review fundamental data structures (arrays, linked lists, trees, graphs, hash maps).',
          'Practice common algorithms (sorting, searching, BFS, DFS, dynamic programming basics).',
          'Solve 3-5 medium-difficulty LeetCode problems, focusing on problem-solving approach and complexity analysis.'
        ]
      },
      {
        day: 2,
        focus: 'Object-Oriented Programming (OOPs) & Core CS Fundamentals',
        tasks: [
          'Revisit OOPs concepts: encapsulation, inheritance, polymorphism, abstraction, and design patterns.',
          'Review basic concepts of Operating Systems (processes, threads, memory management).',
          'Review basic concepts of Database Management Systems (SQL queries, normalization, ACID properties).',
          'Review basic concepts of Computer Networks (OSI model, TCP/IP, HTTP/HTTPS).'
        ]
      },
      {
        day: 3,
        focus: 'Full-Stack Web Development (React.js, Node.js, Express.js, MongoDB)',
        tasks: [
          'Review React.js fundamentals: components, state, props, hooks, routing.',
          'Review Node.js and Express.js: middleware, routing, API creation.',
          'Practice interacting with MongoDB: CRUD operations, Mongoose schemas.',
          'Review JWT authentication flow and implementation.'
        ]
      },
      {
        day: 4,
        focus: 'Project Deep Dive & Behavioral Questions',
        tasks: [
          'Thoroughly review all personal and internship projects: be ready to discuss architecture, technologies, challenges, and solutions in detail.',
          'Prepare for common behavioral questions using the STAR method, focusing on teamwork, problem-solving, and handling failures.',
          'Practice explaining system design for your full-stack projects (e.g., how to scale the Job Portal application).'
        ]
      },
      {
        day: 5,
        focus: 'Mock Interview & Final Review',
        tasks: [
          'Conduct a mock technical interview focusing on DSA and system design.',
          'Conduct a mock behavioral interview.',
          'Review notes on all topics, focusing on areas of weakness identified during practice.',
          'Ensure a clear understanding of the job description and company background.'
        ]
      }
    ]
  }

  return (
    <main className='interview'>
      <div className='interview-container'>
        {/* Left Sidebar */}
        <aside className='sidebar left-sidebar'>
          <nav className='sidebar-nav'>
            <div className='nav-section'>
              <h3 className='nav-section-title'>SECTIONS</h3>
              <button 
                className={`nav-item ${activeSection === 'technical' ? 'active' : ''}`}
                onClick={() => setActiveSection('technical')}
              >
                <span className='nav-icon' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' fill='none'>
                    <path d='M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z' stroke='currentColor' strokeWidth='1.8' />
                  </svg>
                </span>
                Technical Questions
              </button>
              <button 
                className={`nav-item ${activeSection === 'behavioral' ? 'active' : ''}`}
                onClick={() => setActiveSection('behavioral')}
              >
                <span className='nav-icon' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' fill='none'>
                    <path d='M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' stroke='currentColor' strokeWidth='1.8' />
                    <path d='M5 19a7 7 0 0 1 14 0' stroke='currentColor' strokeWidth='1.8' />
                  </svg>
                </span>
                Behavioral Questions
              </button>
              <button 
                className={`nav-item ${activeSection === 'roadmap' ? 'active' : ''}`}
                onClick={() => setActiveSection('roadmap')}
              >
                <span className='nav-icon' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' fill='none'>
                    <path d='M12 2v20M2 12h20' stroke='currentColor' strokeWidth='1.8' />
                  </svg>
                </span>
                Road Map
              </button>
            </div>
          </nav>
        </aside>

        {/* Center Content */}
        <section className='main-content'>
          {/* Technical Questions Section */}
          {activeSection === 'technical' && (
            <>
              <div className='roadmap-header'>
                <div>
                  <h1>Technical Questions</h1>
                  <p className='roadmap-duration'>{mockData.technicalQuestions.length} questions</p>
                </div>
              </div>

              <div className='questions-list'>
                {mockData.technicalQuestions.map((item, idx) => (
                  <div key={idx} className='question-card'>
                    <button 
                      className='question-header'
                      onClick={() => setExpandedTechnical(expandedTechnical === idx ? null : idx)}
                    >
                      <span className='question-number'>{idx + 1}</span>
                      <h3 className='question-text'>{item.question}</h3>
                      <span className={`dropdown-icon ${expandedTechnical === idx ? 'expanded' : ''}`}>
                        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                          <path d='M6 9l6 6 6-6' />
                        </svg>
                      </span>
                    </button>
                    {expandedTechnical === idx && (
                      <div className='question-details'>
                        <div className='detail-item'>
                          <span className='detail-label'>Intention:</span>
                          <p className='detail-content'>{item.intention}</p>
                        </div>
                        <div className='detail-item'>
                          <span className='detail-label'>Answer Guide:</span>
                          <p className='detail-content'>{item.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Behavioral Questions Section */}
          {activeSection === 'behavioral' && (
            <>
              <div className='roadmap-header'>
                <div>
                  <h1>Behavioral Questions</h1>
                  <p className='roadmap-duration'>{mockData.behavioralQuestions.length} questions</p>
                </div>
              </div>

              <div className='questions-list'>
                {mockData.behavioralQuestions.map((item, idx) => (
                  <div key={idx} className='question-card'>
                    <button 
                      className='question-header'
                      onClick={() => setExpandedBehavioral(expandedBehavioral === idx ? null : idx)}
                    >
                      <span className='question-number'>{idx + 1}</span>
                      <h3 className='question-text'>{item.question}</h3>
                      <span className={`dropdown-icon ${expandedBehavioral === idx ? 'expanded' : ''}`}>
                        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                          <path d='M6 9l6 6 6-6' />
                        </svg>
                      </span>
                    </button>
                    {expandedBehavioral === idx && (
                      <div className='question-details'>
                        <div className='detail-item'>
                          <span className='detail-label'>Intention:</span>
                          <p className='detail-content'>{item.intention}</p>
                        </div>
                        <div className='detail-item'>
                          <span className='detail-label'>Answer Guide:</span>
                          <p className='detail-content'>{item.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Road Map Section */}
          {activeSection === 'roadmap' && (
            <>
              <div className='roadmap-header'>
                <div>
                  <h1>Preparation Road Map</h1>
                  <p className='roadmap-duration'>7-day plan</p>
                </div>
              </div>

              <div className='timeline'>
                {mockData.roadMap.map((item, idx) => (
                  <div key={item.day} className='timeline-item'>
                    <div className='timeline-dot'></div>
                    {idx !== mockData.roadMap.length - 1 && <div className='timeline-line'></div>}

                    <div className='timeline-content'>
                      <div className='day-header'>
                        <span className='day-label'>Day {item.day}</span>
                        <h3 className='day-title'>{item.focus}</h3>
                      </div>
                      <ul className='day-tasks'>
                        {item.tasks.map((task, taskIdx) => (
                          <li key={taskIdx}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

        {/* Right Sidebar */}
        <aside className='sidebar right-sidebar'>
          <div className='sidebar-section match-section'>
            <h2 className='section-label'>MATCH SCORE</h2>
            <div className='match-circle'>
              <span className='match-value'>{mockData.matchScore}</span>
              <span className='match-percent'>%</span>
            </div>
            <p className='match-message'>{mockData.skillMessage}</p>
          </div>

          <div className='sidebar-section'>
            <h2 className='section-label'>SKILL GAPS</h2>
            <div className='skill-tags'>
              {mockData.skillGaps.map((gap, idx) => (
                <span key={idx} className={`skill-tag severity-${gap.severity}`}>
                  {gap.skill}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default Interview