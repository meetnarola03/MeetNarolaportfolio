export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  responsibilities: string[];
  architecture: string;
  technicalBreakdown: { step: number; title: string; description: string }[];
  metrics: { label: string; value: string; isPlaceholder: boolean }[];
  images: string[];
  category: string;
}

export const projects: Project[] = [
  {
    id: "car-rental-system",
    title: "Car Rental System",
    shortDescription: "Full-stack car rental platform with customer booking and admin dashboard for fleet management.",
    longDescription: "Comprehensive car rental management system featuring real-time availability tracking, booking workflow, payment integration, and administrative controls for vehicle fleet management, pricing, and customer analytics.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Stripe API"],
    responsibilities: [
      "Designed and implemented RESTful API architecture",
      "Built real-time booking system with availability updates",
      "Developed admin dashboard for fleet and booking management",
      "Integrated payment gateway for secure transactions"
    ],
    architecture: "Client-server architecture with React frontend, Node.js/Express backend, MongoDB for data persistence, and Socket.io for real-time updates.",
    technicalBreakdown: [
      {
        step: 1,
        title: "Database Schema Design",
        description: "Created normalized MongoDB schemas for vehicles, bookings, users, and payments with proper indexing for performance."
      },
      {
        step: 2,
        title: "Real-time Availability System",
        description: "Implemented Socket.io to push real-time vehicle availability updates to all connected clients, preventing double bookings."
      },
      {
        step: 3,
        title: "Payment Integration",
        description: "Integrated Stripe API with webhook handlers for secure payment processing and automatic booking confirmation."
      },
      {
        step: 4,
        title: "Admin Analytics Dashboard",
        description: "Built comprehensive dashboard with revenue charts, booking statistics, and fleet utilization metrics using Recharts."
      }
    ],
    metrics: [
    ],
    images: [],
    category: "Full-Stack Web Application"
  },
  {
    id: "roro-ferry-booking",
    title: "Ro Ro Ferry Booking",
    shortDescription: "Ferry route booking system with payment integration and schedule management.",
    longDescription: "Maritime transportation booking platform enabling customers to book ferry routes, select vehicle types, manage schedules, and process payments. Includes admin panel for route management and capacity planning.",
    techStack: ["React", "PHP", "MySQL", "Razorpay API"],
    responsibilities: [
      "Developed booking workflow with route selection and seat/vehicle allocation",
      "Implemented schedule management system with date-based availability",
      "Integrated payment gateway with booking confirmation system",
      "Built admin interface for route and capacity management"
    ],
    architecture: "Three-tier architecture with React SPA frontend, Node.js REST API middleware, and MySQL relational database for booking and schedule data.",
    technicalBreakdown: [
      {
        step: 1,
        title: "Route & Schedule Management",
        description: "Designed relational schema in MySQL to handle ferry routes, multiple daily schedules, and dynamic pricing based on vehicle types."
      },
      {
        step: 2,
        title: "Booking Engine",
        description: "Developed transactional booking system with ACID compliance to prevent overbooking and handle concurrent reservations."
      },
      {
        step: 3,
        title: "Payment Processing",
        description: "Integrated Razorpay for secure payment processing with automatic retry logic and webhook handlers for payment status updates."
      },
      {
        step: 4,
        title: "Admin Dashboard",
        description: "Created admin panel for managing routes, schedules, pricing rules, and viewing booking analytics with export functionality."
      }
    ],
    metrics: [
    ],
    images: [],
    category: "Full-Stack Web Application"
  },
  {
    id: "vassio-mobile-app",
    title: "Vassio Mobile App",
    shortDescription: "Flutter-based order management mobile app with Firebase backend and push notifications.",
    longDescription: "Cross-platform mobile application for order management built with Flutter and Firebase. Features real-time order tracking, push notifications for order updates, offline data sync, and role-based access control.",
    techStack: ["Flutter", "Firebase", "Firebase Cloud Messaging", "Firestore", "Firebase Auth"],
    responsibilities: [
      "Architected Flutter app with clean architecture and state management",
      "Implemented Firebase Authentication with role-based permissions",
      "Built real-time order tracking with Firestore listeners",
      "Integrated Firebase Cloud Messaging for push notifications"
    ],
    architecture: "Flutter mobile app with Firebase as backend-as-a-service, utilizing Firestore for real-time data sync, FCM for notifications, and Firebase Auth for authentication.",
    technicalBreakdown: [
      {
        step: 1,
        title: "App Architecture",
        description: "Implemented clean architecture with BLoC pattern for state management, separating business logic from UI for maintainability and testability."
      },
      {
        step: 2,
        title: "Real-time Order Sync",
        description: "Leveraged Firestore listeners to enable real-time order status updates across all connected devices with offline persistence."
      },
      {
        step: 3,
        title: "Push Notifications",
        description: "Configured Firebase Cloud Messaging with topic-based subscriptions for targeted notifications and background message handling."
      },
      {
        step: 4,
        title: "Offline Support",
        description: "Implemented offline data caching and sync queue to ensure app functionality without network connectivity, with automatic sync on reconnection."
      }
    ],
    metrics: [
    
    ],
    images: [],
    category: "Mobile Application"
  },
  {
    id: "screen-share-desktop-app",
    title: "Screen Share Desktop App",
    shortDescription: "Real-time screen sharing desktop application with live chat using WebSocket technology.",
    longDescription: "Desktop application enabling real-time screen sharing and collaboration with integrated live chat. Built with React frontend, Node.js backend, MongoDB for session storage, and Socket.io/WebSocket for bidirectional communication.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "WebRTC", "Electron"],
    responsibilities: [
      "Developed WebRTC-based screen sharing functionality",
      "Implemented real-time chat system using Socket.io",
      "Built session management and user authentication",
      "Optimized video stream quality and bandwidth usage"
    ],
    architecture: "Electron-based desktop app with React frontend, Node.js signaling server, WebRTC for peer-to-peer media streaming, Socket.io for chat, and MongoDB for session data.",
    technicalBreakdown: [
      {
        step: 1,
        title: "WebRTC Implementation",
        description: "Set up WebRTC peer connections with STUN/TURN servers for NAT traversal, enabling reliable screen sharing across different network configurations."
      },
      {
        step: 2,
        title: "Signaling Server",
        description: "Built Node.js signaling server using Socket.io to handle WebRTC offer/answer exchange and ICE candidate sharing between peers."
      },
      {
        step: 3,
        title: "Real-time Chat",
        description: "Implemented Socket.io-based chat with typing indicators, message persistence in MongoDB, and chat history retrieval."
      },
      {
        step: 4,
        title: "Stream Optimization",
        description: "Implemented adaptive bitrate streaming and frame rate adjustment based on network conditions to maintain quality while minimizing bandwidth."
      }
    ],
    metrics: [
  
    ],
    images: ["s4.jpg"],
    category: "Desktop Application"
  },
  {
    id: "ecommerce-website",
    title: "E-commerce Website",
    shortDescription: "Modern e-commerce platform with Next.js frontend and Node.js/MongoDB backend.",
    longDescription: "Full-featured e-commerce website with product catalog, shopping cart, checkout flow, payment integration, order management, and admin dashboard. Built with Next.js for optimal performance and SEO.",
    techStack: ["Next.js", "Node.js", "Express", "MongoDB", "Stripe API", "Redis"],
    responsibilities: [
      "Built Next.js frontend with SSR/SSG for SEO optimization",
      "Developed RESTful API for product, cart, and order management",
      "Implemented secure checkout flow with Stripe integration",
      "Created admin panel for inventory and order management"
    ],
    architecture: "Next.js SSR/SSG frontend for SEO, Node.js/Express REST API backend, MongoDB for product and order data, Redis for session management and caching.",
    technicalBreakdown: [
      {
        step: 1,
        title: "Next.js Implementation",
        description: "Leveraged Next.js SSR for product pages and SSG for static content, implementing incremental static regeneration for optimal performance and SEO."
      },
      {
        step: 2,
        title: "Shopping Cart System",
        description: "Built persistent shopping cart with Redis caching for guest users and MongoDB persistence for authenticated users, with real-time inventory checks."
      },
      {
        step: 3,
        title: "Payment Integration",
        description: "Integrated Stripe Checkout with webhook handlers for order fulfillment, inventory updates, and email notifications upon successful payment."
      },
      {
        step: 4,
        title: "Admin Dashboard",
        description: "Developed comprehensive admin panel for product management, order fulfillment, inventory tracking, and sales analytics with export functionality."
      }
    ],
    metrics: [
    ],
    images: [],
    category: "Full-Stack Web Application"
  }
];
