export const courses = [
    {
        id: '1',
        title: 'Complete Web Development Bootcamp',
        description: 'Learn full-stack web development from scratch with HTML, CSS, JavaScript, React, Node.js, and more.',
        category: 'development',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        duration: '12 weeks',
        students: 15430,
        rating: 4.8,
        price: 99.99,
        learningObjectives: [
            'Build responsive websites using HTML5 and CSS3',
            'Master JavaScript and modern ES6+ features',
            'Create full-stack applications with React and Node.js',
            'Deploy applications to production',
        ],
        modules: [
            {
                title: 'Introduction to Web Development',
                duration: '2 weeks',
                lessons: [
                    {
                        title: 'Welcome to the Course',
                        duration: '5:30',
                        videoUrl: 'https://www.youtube.com/embed/sample1',
                        description: 'Course overview and setup instructions.'
                    },
                    {
                        title: 'HTML Fundamentals',
                        duration: '15:45',
                        videoUrl: 'https://www.youtube.com/embed/sample2',
                        description: 'Learn the basics of HTML markup.'
                    }
                ]
            },
            {
                title: 'CSS & Responsive Design',
                duration: '3 weeks',
                lessons: [
                    {
                        title: 'CSS Basics',
                        duration: '12:20',
                        videoUrl: 'https://www.youtube.com/embed/sample3',
                        description: 'Introduction to CSS styling.'
                    },
                    {
                        title: 'Flexbox Layout',
                        duration: '18:15',
                        videoUrl: 'https://www.youtube.com/embed/sample4',
                        description: 'Master modern CSS layouts with Flexbox.'
                    }
                ]
            }
        ]
    },
    // Add more courses as needed
];