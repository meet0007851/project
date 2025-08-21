const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Sales Report",
        "description": "Compile Q2 sales data and create presentation slides.",
        "date": "2025-08-20",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Meeting",
        "description": "Discuss project requirements with client via Zoom.",
        "date": "2025-08-19",
        "category": "Meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Update CRM",
        "description": "Ensure all new leads are updated in CRM system.",
        "date": "2025-08-22",
        "category": "Data Entry",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Bug Fixing",
        "description": "Resolve login authentication issue on web app.",
        "date": "2025-08-18",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Database Backup",
        "description": "Perform scheduled backup of production database.",
        "date": "2025-08-21",
        "category": "Maintenance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review pull requests from team members.",
        "date": "2025-08-19",
        "category": "Code Review",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Security Audit",
        "description": "Check application logs for unusual activity.",
        "date": "2025-08-23",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Content Writing",
        "description": "Write a blog post about company culture.",
        "date": "2025-08-20",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "SEO Optimization",
        "description": "Optimize landing page for better search ranking.",
        "date": "2025-08-22",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Newsletter Draft",
        "description": "Prepare monthly newsletter draft for review.",
        "date": "2025-08-21",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Inventory Check",
        "description": "Verify stock levels for warehouse items.",
        "date": "2025-08-18",
        "category": "Operations",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Vendor Call",
        "description": "Negotiate pricing with supplier.",
        "date": "2025-08-20",
        "category": "Procurement",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Training",
        "description": "Conduct safety training session.",
        "date": "2025-08-23",
        "category": "HR",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Policy Update",
        "description": "Update internal HR policies.",
        "date": "2025-08-19",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "UI Design",
        "description": "Create wireframes for new dashboard module.",
        "date": "2025-08-21",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "User Testing",
        "description": "Conduct usability testing with selected users.",
        "date": "2025-08-22",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prototype Update",
        "description": "Update Figma prototype based on feedback.",
        "date": "2025-08-23",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  }
]

const admin = {
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}

export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}
export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
    return {admin,employees}
}