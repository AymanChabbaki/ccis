import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, Mic2, Users, Coffee, Award, Globe, Zap, Trophy, BookOpen } from 'lucide-react';

const ASSET_BASE = window.location.pathname.startsWith('/icisct') ? '/icisct/' : '/';

const days = [
  {
    id: 0, label: 'Day 1', date: 'Thursday, June 25', theme: 'Opening & Plenary Sessions',
    slots: [
      { time: '08:30–09:00', type: 'logistics', title: 'Participant Registration & Welcome' },
      { time: '09:00–10:00', type: 'ceremony', title: 'Official Opening Ceremony', items: [
        "Dean of the Faculty of Sciences Ben M'Sik",
        "Vice President of Hassan II University of Casablanca",
        "Head of the Department of Mathematics and Computer Science",
        "Director of the Laboratory of Artificial Intelligence and Systems (LIAS)",
        "Chair of the ICISCT'2026 Conference",
        "Partnership Signing — FSBM, LIAS & KAINOS",
      ]},
      { time: '10:00–11:00', type: 'plenary', num: 1, title: 'The Intelligence Layer: Governing Smart Cities That Perform', speaker: 'Dr. Jeannice Fairrer Samani', affiliation: 'PhD, MBA — CEO, Fairrer Samani Group | U.S. State Dept. Delegate for Women in STEM, Silicon Valley', chair: 'Pr. El Filali Sanaa' },
      { time: '11:00–12:00', type: 'plenary', num: 2, title: 'Information Systems Security', speaker: 'Prof. Tarek Gaber', affiliation: 'University of Salford | Suez Canal University — World Top 2% Scientist, Innovate UK & GCHQ Research Lead', chair: 'Pr. Abdessamed Belangour' },
      { time: '12:00–12:30', type: 'break', title: 'Coffee Break' },
      { time: '12:30–13:30', type: 'parallel', sessions: [
        { id: 's1', num: 1, title: 'Smart Education, Smart Campus & Human Capital', chairs: ['Achtaich Khadija', 'Aitdaoud Mohammed', 'Ghazouani Mohamed', 'Marzak Abdelaziz'], papers: [
          { id: '25', title: 'Graduate Employability and Skills Gap Prediction in Smart Cities: Analysis and Conceptual Modeling', authors: 'Bella, Brahim; Izourane, Fatim-Zahra; Chemlal, Yman; Azzouazi, Mohamed' },
          { id: '46', title: 'Gaze Tracking for Automatic Detection of Suspicious Behavior during Online Assessments', authors: 'abourifa, hanane' },
          { id: '45', title: 'Explainable Multi-Label Biphasic Screening Framework for Behavioral and Emotional Concerns in Primary-School Learners', authors: 'Banerjee, Sohini; Barhate, Shweta' },
          { id: '47', title: 'Toward Adaptive Smart Learning: A Behavioral Analytics Framework for Proactive Student Intervention in Smart Campuses', authors: 'IZOURANE, Fatim-zahra; Bella, Brahim; Ardchir, Soufiane; Ounacer, Soumaya; Azzouazi, Mohamed' },
        ]},
        { id: 's2', num: 2, title: 'Smart Education, Smart Campus & Human Capital', chairs: ['Sara Ouahabi', 'Guerss Fatima-zahra', 'Hain Mustapha', 'Sbai Hanae'], papers: [
          { id: '59', title: 'IoT and Artificial Intelligence for Smart Classroom Management in Primary Schools', authors: 'Ouahouda, Fatima zohra; achtaich, khadija; achtaich, naceur' },
          { id: '69', title: 'IT Reskilling for Smart Cities: The Impact of Academic Background on Learning Outcomes in Data-Driven Training Programs', authors: 'SAMMAH, salma; ACHTAICH, Khadija; AIT DAOUD, Mohammed' },
          { id: '71', title: 'Beyond Detection: A Conceptual Framework for Linking AI-Based Student Engagement Recognition to Pedagogical Intervention', authors: 'QARBAL, IKRAM; SAEL, Nawal; OUAHABI, Sara' },
          { id: '22', title: 'An Explainable Machine Learning Framework for Applicant Engagement Prediction in Online Recruitment', authors: 'Abbour, Fatima Zahra; Ardchir, Soufiane; Ounacer, Soumaya; Azzouazi, Mohamed' },
        ]},
      ]},
      { time: '13:30–14:30', type: 'break', title: 'Lunch Break', isLunch: true },
      { time: '15:00–16:30', type: 'parallel', sessions: [
        { id: 's3', num: 3, title: 'Smart Mobility, Urban Logistics & Traffic Systems', chairs: ['Bouhsissin Soukaina', 'Ellaky Zineb', 'Moulad Lamyaa', 'Zahour Omar'], papers: [
          { id: '11', title: 'Artificial Intelligence-Driven Resilience in Urban Supply Chains for Smart Cities: A Systematic Literature Review on Risk Management and Intelligent Logistics Systems', authors: 'BEDDAOU, Hafssa' },
          { id: '21', title: 'From Road Traffic to Intelligent Mobility: A Case Study of AI-Based Urban Transport Transformation in Rabat', authors: 'Watik, Chaimaa' },
          { id: '43', title: 'PartNet: Deep Learning and Evolutionary Optimization for Parking Allocation', authors: 'Mouanid, Sihame' },
          { id: '72', title: 'SCAD: Automatic ODD Coverage Assessment from Unannotated Multimodal Naturalistic Driving Data', authors: 'Herchan, Asma' },
          { id: '74', title: 'NeuroRoute Calme: A Sensory-Aware Pedestrian Routing System for Neurodivergent and Mobility-Impaired Users Using Multi-Criteria Graph Optimization', authors: 'HAIMOUD, Abdelaziz; ikbaiss, abdelghafour; Kassmi, Ayoub' },
        ]},
        { id: 's4', num: 4, title: 'Cybersecurity, Privacy, Blockchain & Digital Trust', chairs: ['Belangour Abdessamad', 'Benaddi Hafsa', 'Gaber Tarek', 'Sikan Hassan'], papers: [
          { id: '44', title: 'Blockchain and IOTA-Based Distributed Ledger Architectures for Secure and Scalable IoT Systems', authors: 'elmnajja, dina; fartitchou, Mohamed; daouayry, youssef; kannouf, Nabil' },
          { id: '57', title: 'GraphCodeBERT-Based Hybrid Models for Solidity Smart Contract Vulnerability Detection', authors: 'el inani, najwa; BENABBOU, Faouzia; SABIRI, Khadija' },
          { id: '58', title: 'Cross-Modal Fake News Detection on Social Media Using Textual and Visual Consistency Analysis', authors: 'Qaqa, Saad; BENABBOU, Faouzia' },
          { id: '7',  title: 'JJ2: Zero Trust Browser Extension for Secure Payment and Fraud Prevention', authors: 'A, Kathiravan; R, Abishek; M, Mayakannan; G, Madhankumar; Dr B. Kalaiselvi' },
          { id: '19', title: 'Vulnerability Surface Analysis of the Model Context Protocol in Agentic Middleware: A 60-Day CVE Dissection with Neuromorphic Detection Frameworks and Distributed Tool Integrity Verification', authors: 'Bhanushali, Akshay' },
          { id: '37', title: 'Energy-Efficient Intrusion Detection in WSN using Adaptive Swarm Optimization and Advanced Deep Neural Network', authors: 'W, Brajula' },
          { id: '85', title: 'Cancelable Iris Authentication Using Hybrid Feature Extraction for Privacy Preserving Smart City Access Control', authors: 'LOURIGA, ZINE.EDDINE; JABRI, ISMAIL; EL OUAAZIZI, AZIZA; EL AFFAR, ANASS' },
          { id: '88', title: 'Artificial Intelligence in Cybersecurity: A Systematic Review of Threat Detection, Prevention, and Response Techniques', authors: 'Othmane, Aitlmoudden; LAMYAA, MOULAD; MOHAMED, HOUSNI; MOHAMMED, AITDAOUD' },
        ]},
        { id: 's5', num: 5, title: 'AI, Machine Learning & Data Analytics Foundations', chairs: ['Ettaoufik Abdelaziz', 'Benlahmer Elhabib', 'Izid Malika', 'Zaouch Amal'], papers: [
          { id: '3',  title: 'A Multi-Branch LSTM with Attention for Industrial Time-Series Fault Diagnosis', authors: 'EL harnaf, Ibtissam; Achtaich, Khadija; Tetouani, Samir' },
          { id: '53', title: 'SMOTE for Stock Crash Prediction: A Negative Result on Imbalanced Financial Time Series', authors: 'Saifi, Wafae; Nouh, Said; Bahassine, Said; Chemseddine Idrissi, Imrane' },
          { id: '75', title: 'AI vs. Traditional Methods in Big Data Cleaning and Validation: A Comparative Study of Accuracy, Time, and Error Rate', authors: 'NAIT SI BOURHIM, Ayoub; El Aissi, Mohamed El Mehdi; Benjelloun, Sarah; BOULAICH, Mohammed Ali; LAKHRISSI, Younes' },
          { id: '84', title: 'A Survey on Imbalanced Learning in Supervised Classification: Methods, Metrics, and Applications', authors: 'Tajani, Youssef' },
          { id: '51', title: 'A Smart Office System Based on Machine Learning and IoT in a University Campus', authors: 'IZOURANE, Fatim-zahra; Bella, Brahim' },
          { id: '68', title: 'A Hybrid Machine Learning Framework for Insurance Risk Prediction: Combining Structured Data, Temporal Patterns, and Explainable AI', authors: 'ERRAHIBI, HAMZA; Chemlal, Yman; Azzouazi, Mohamed' },
        ]},
        { id: 's6', num: 6, title: 'Smart Agriculture, Sustainable Energy & Urban Green Spaces', chairs: ['Azzouazi Mohamed', 'Sekhara Youssef', 'Aharrane Nabil', 'Bouaine Chaimaa'], papers: [
          { id: '17', title: 'IoT based Smart Grey Water Classification for Sewage Treatment Plant using TDS, pH, Temperature Sensors', authors: 'Nanduri, Dundisathishkumar' },
          { id: '4',  title: 'Adaptive Multimodal Fusion of Visual, IoT, and Knowledge-Based Data for Context-Aware Plant Disease Diagnosis', authors: 'Alaoui, Fatima-zahra; ELJIANI, laila; elfilali, Sanaa; AIT ABDELOUAHID, rachida; Banou, zouhier; ellaky, zineb' },
          { id: '55', title: 'Dynamic Decision Support in Smart Agriculture Through the Integration of Artificial Intelligence, Computer Vision, and Complex System Modeling', authors: 'Taymi, Imane' },
          { id: '70', title: 'Semantic Segmentation and Machine Learning for Agricultural Yield Prediction Using Multi-Temporal Satellite and RGB Data in the Souss-Massa Region', authors: 'Abourabia, Imade' },
          { id: '62', title: 'AI-Driven Adaptive Irrigation and Predictive Maintenance of Urban Green Spaces under Water Constraints in Smart Cities', authors: 'chafiq, fouad' },
        ]},
        { id: 's7', num: 7, title: 'Smart Governance and Digital Sovereignty for Urban Information Systems', chairs: ['Matrane Yassir', 'El Filali Sanaa', 'Jeannice Fairrer Samani', 'Khiati Mustapha'], papers: [
          { id: '16', title: "Who Owns the Smart City? Digital Sovereignty and Urban Intelligence in Morocco's Smart City Transition", authors: 'Baidane, Salma; DAFIR, Amine' },
          { id: '24', title: 'The Management of Intelligent Information Systems in Organizational Settings: Review of Recent Literature (2021–2026)', authors: 'EL MEKADEM, Noura' },
          { id: '56', title: 'Exploring Artificial Intelligence Adoption for Smart University Governance in Morocco: A Survey-Based Needs Analysis', authors: 'CHAYMAA, ERRACHID; ACHTAICH, KHADIJA; AIT DAOUD, MOHAMMED' },
          { id: '18', title: 'MENDARI: A Digital Inclusion Marketplace for Women Artisans and Home-Based Entrepreneurs', authors: 'elbejjaji, kawtar' },
          { id: '26', title: 'AI-Driven Business Documentation: A Comprehensive Review of Approaches and Applications', authors: 'Sebbar, Abdelhamid; Zahour, Omar' },
          { id: '77', title: 'Designing Emotion-Aware Customer Journeys through Artificial Intelligence: Trends, Applications, and Research Directions', authors: 'El Bhilat, HIND; BAADDI, MOHAMMED' },
          { id: '89', title: 'Auditing Calculation Errors in Judicial Workers Compensation Awards: A Seven-Year Empirical Study Toward Smart Legal Governance', authors: 'KEMAL, zakaria; HANOUNE, mostafa' },
        ]},
      ]},
      { time: '16:30–17:00', type: 'break', title: 'Coffee Break' },
      { time: '17:00–18:00', type: 'logistics', title: 'Day 1 Wrap-up & Discussion', description: 'Open floor discussion and summary of the first day' },
    ]
  },
  {
    id: 1, label: 'Day 2', date: 'Friday, June 26', theme: 'Plenary Conferences & Scientific Sessions',
    slots: [
      { time: '09:00–10:00', type: 'plenary', num: 3, title: 'From Smart City to Smart Region: Digital Twins as Instruments for Simulation, Governance, and Territorial Sovereignty', speaker: 'Az Eddine Bennani', affiliation: 'NEOMA Business School & Sorbonne University — Engineer, MBA (Chicago), PhD in Economics, HDR in Digital Governance', chair: 'Pr. Ellaky Zineb' },
      { time: '10:00–11:00', type: 'plenary', num: 4, title: 'Artificial Intelligence for Stochastic Macroeconomic and Epidemic Dynamics: A PINN-Based Approach', speaker: 'Pr. Idriss Sekkak', affiliation: 'University of Alberta, Canada — Specialist in AI-driven modelling combining epidemiology, macroeconomics & Physics-Informed Neural Networks', chair: 'Pr. Hattaf Khalid' },
      { time: '11:00–11:30', type: 'break', title: 'Coffee Break' },
      { time: '11:30–13:00', type: 'parallel', sessions: [
        { id: 's8', num: 8, title: 'AI-Powered Language Technologies and Agentic Systems for Smart Services', chairs: ['Aouhassi Sarah', 'Lmati Imane', 'Zaouch Amal', 'Zaoui Chaimae'], papers: [
          { id: '80', title: 'A Systematic Review of Information Extraction from Legal Documents: From Rule-Based Systems to Large Language Models and Knowledge Graphs for Smart Governance', authors: 'Zahid, Achraf; Nawal, SAEL' },
          { id: '13', title: 'From Brains to Swarms: A Systems Architecture for LLM-Based Autonomous Agents', authors: 'Singh, Shantanu' },
          { id: '14', title: 'From Solo Actors to Orchestrated Ecosystems: Disentangling AI Agents and Agentic AI', authors: 'Singh, Shantanu' },
          { id: '34', title: 'Intelligent Real-Time Detection of Dynamic Objects in Video Scenes through Computer Vision and AI: Smart City Application', authors: 'bouchama, touhami' },
          { id: '78b', title: 'Edge-Deployed Real-Time Threat Detection via Agentic Vision-Language and Multi-Modal Semantic Gating', authors: 'Baala, Asmae; Hanoune, Mostafa; Bentaib, Mohssine; Eljiani, Laila' },
          { id: '52', title: 'Self-supervised Multimodal Scene Understanding for Environmental Monitoring in Smart Cities', authors: 'Bouhadda, Wail; Amchia, Mohamed; El brahimi, Meriem; Ghazouani, Mohamed' },
        ]},
        { id: 's9', num: 9, title: 'Digital Health, Smart Healthcare and Clinical Decision Support', chairs: ['Bouhsissin Soukaina', 'Nouh Said', 'Zakrani Abdelali', 'Othmane Aitelmoudden'], papers: [
          { id: '15', title: 'Multimodal AI Architectures for Smart Healthcare Systems: A PRISMA-Based Review of Real-Time Clinical Intelligence', authors: 'Miftah, Kaoutar' },
          { id: '23', title: 'Advancing Medical Image Analysis Through Hybrid CNN-Transformer Architectures: A State-of-the-Art Review', authors: 'EL KHASSOUMI, chaimae; Dehbane, Oualid; OUAHABI, Sara; BENLAHMAR, El habib' },
          { id: '36', title: 'Plane-Aware Hybrid Deep Learning Framework for Automated Breast MRI Segmentation in Smart Healthcare Systems', authors: 'El Jiani, Laila; BANOU, Zouheir; ALAOUI, Fatima-Zahra; SAKHI, Hasnae; BENLAHMAR, EL Habib; EL FILALI, Sanaa' },
          { id: '42', title: 'Explainable AI for Medical Image Classification Using Grad-CAM', authors: 'GUENDOUL, Oumaima; TABII, Youness; OULAD HAJ THAMI, Rachid' },
          { id: '38', title: 'Cross Domain NeuroFusion Attention with Gradient Guided Multi Scale Deformable Spatial Attention Network for Brain Tumor Detection in CT and MRI', authors: 'W, Brajula' },
          { id: '39', title: 'Temperature Scaled Deformable Cross Modal Fusion with Monte Carlo Modulated Hierarchical Attention for Brain Tumor Detection from CT, MRI and Clinical Data', authors: 'W, Brajula' },
        ]},
      ]},
      { time: '13:00–15:30', type: 'break', title: 'Lunch Break', isLunch: true },
      { time: '15:30–17:30', type: 'parallel', badge: 'ONLINE', sessions: [
        { id: 's10', num: 10, online: true, title: 'Digital Health, Smart Healthcare and Clinical Decision Support', chairs: ['Moukhliss Ghizlane', 'Aharrane Nabil', 'Hamal Oussama'], papers: [
          { id: '5',  title: 'Marine Heat Pumps in Coastal Heating and Cooling Systems: Heat Exchanger Integration, Performance and Decarbonization Potential', authors: 'ABOUELFATH, ZAINA; EL-HAMDANI, SAKINA' },
          { id: '64', title: 'Machine Learning Approaches for Thermophysical Property Prediction of Sustainable Biodiesel Blends Containing Waste Cooking Oil and 1-Butanol', authors: 'SAMADI, Khaoula' },
          { id: '65', title: 'Photo-Oxidative Degradation of Low-Density Polyethylene Films under Natural Mediterranean Sunlight: A Multi-Technique Structural and Vibrational Study', authors: 'EL KZAINI, WIAM' },
          { id: '50', title: 'AI-Based Anomaly Detection and Real-Time Response Systems for Urban Green Space Management in Smart Cities: A Review', authors: 'MACHKOUR, LAILA; Bouhadda, Wail; Amchia, Mohamed; Ghazouani, Mohamed' },
          { id: '49', title: 'AI-Based Intelligent Irrigation Optimization for Urban Green Spaces Using Multi-Sensor Data: A Review', authors: 'Meriem, EL BRAHIMI; Laila, MACHKOUR; Wail, BOUHADDA; Mohamed, GHAZOUANI' },
          { id: '83', title: 'Multimodal and Multilingual AI for Plant Disease Diagnosis: A PRISMA Review for Smart Urban Agriculture', authors: 'kaissouni, oussama; OUAHABI, Sara; SAEL, Nawal' },
        ]},
        { id: 's11', num: 11, online: true, title: 'Smart Agriculture, Sustainable Energy & Urban Green Spaces', chairs: ['Aitdaoud Mohammed', 'Ait Abdelouahid Rachida', 'Elazzaby Fouzia'], papers: [
          { id: '33', title: 'Leveraging Pretrained Language Models for Conflict Discourse Analysis: A Case Study on Online Discussions', authors: 'Matrane, Yassir; Ellaky, Zineb; Banou, Zouheir; Alaoui, Fatima-zahra; Benabbou, Faouzia; Saber, Ilyes' },
          { id: '79', title: 'LocalTax-RAG: A Privacy-Preserving Intelligent Assistant for Moroccan Accounting and Tax Regulations', authors: 'Bouhsissin, Soukaina; Sael, Nawal' },
          { id: '94', title: 'Improving Cross-Language Plagiarism Detection through LLM-Based Candidate Retrieval', authors: 'BOUAINE, Chaimaa; ZAOUI, Chaimae; BENABBOU, Faouzia' },
          { id: '30', title: 'A Comprehensive Benchmark for Moroccan Dialect Understanding and Generation in Large Language Models', authors: 'LABIED, MARIA; Belangour, Abdessamad; Banane, Mouad' },
          { id: '27', title: 'UrbanT2V: Benchmarking Text-to-Video Diffusion Models for Smart City Visual Content Generation', authors: 'Hannouni, Salma; Belarache, Oumaima; BENLAHMAR, El Habib; El Filali, Sanaa' },
          { id: '28', title: 'Generative AI That Creates as Humans Do: A Multi-Modal Process Alignment Framework', authors: 'Moumtaz, Yosra; Chadi, Mohamed-Amine; Mouchawrab, Samar' },
        ]},
        { id: 's12', num: 12, online: true, title: 'AI, Machine Learning & Data Analytics Foundations', chairs: ['Ouchra Hafsa', 'Yalid Amal', 'Hanoune Mustapha'], papers: [
          { id: '41', title: 'LLM-Augmented MLOps for Smart City Infrastructure: Semantic Monitoring and Adaptive Decision Support in Production ML Systems', authors: 'ESSADEQ, ICHRAQ; Nouh, Said; Kandali, Khalid' },
          { id: '73', title: 'Adaptive Speed-Derived Proxy Risk Annotation for Risk-Aware Traffic Modeling in Urban Environments', authors: 'boulaid, sara; Bouhsissin, Soukaina; Zakrani, Abdelali; Banane, Mouad' },
          { id: '95', title: 'FedWEVOTE: A Meta-Learned Voting Aggregation Framework for Federated Learning', authors: 'ZAOUI, CHAIMAE; BOUAINE, chaimaa; BENABBOU, Faouzia; BANOU, Zouheir' },
          { id: '2',  title: 'From Reactive to Predictive Quality Management: An AI-Metrics Architecture Framework', authors: 'TALKAM, Issam; BELANGOUR, Abdessamad; HAMZANE, Ibrahim' },
          { id: '82', title: 'A Federated Deep Learning Framework for Privacy-Aware Intrusion Detection in IoT Environments', authors: 'Baich, Marwa' },
        ]},
        { id: 's13', num: 13, online: true, title: 'Smart & Complex Systems', chairs: ['Benaddi Hafsa', 'Boutayed Mohamed', 'Ferjouchia Hanane'], papers: [
          { id: '67', title: 'Empowering Urban Mobility Decisions: A Dynamic MATSim Framework for the Rabat Region', authors: 'Fathi, Yassine; Qbouche, Khalid; Rhoulami, Khadija' },
          { id: '20', title: 'Towards Resilient Urban Communication Infrastructure: A Defense-in-Depth Security Framework for VOIP Deployments in Smart City Environments', authors: 'ELLAKY, Zineb; Matrane, Yassir; Alaoui, Fatima-Zahra; Benabbou, Faouzia; Sael, Nawal' },
          { id: '40', title: 'Machine Learning and Decision Making in Construction Projects: A Systematic Review', authors: 'JABOURI, Anas; EZZIADI, Abdelali' },
          { id: '76', title: 'Neural Network Training with Artificial Data for Parameter Estimation of the Fisher–KPP Equation', authors: 'Bouggar, Driss' },
          { id: '63', title: "Cognitive Sovereignty and the Sustainability Paradox in AI-Driven Industrial Transformation: Evidence from Africa's First Lighthouse Factory", authors: 'ZANG, YUANYUAN; Bennani, AZ' },
        ]},
      ]},
      { time: '17:30–18:00', type: 'logistics', title: 'Scientific Committee Meeting & Networking', description: 'Scientific committee meeting and networking session' },
    ]
  },
  {
    id: 2, label: 'Day 3', date: 'Saturday, June 27', theme: 'Workshops, Competition & Closing',
    slots: [
      { time: '09:00–10:00', type: 'plenary', num: 5, title: 'AI Against Financial Fraud: From Emerging Threats to Intelligent Defense Strategies', speaker: 'Mr ISMAIL HARTI', affiliation: 'Information Security & Risk Senior Manager, HPS Group', description: 'Talk & Practical Demonstration on AI-Powered Fraud Detection and Risk Management', chair: 'Pr. Ouahbi Sara' },
      { time: '10:00–11:00', type: 'workshop', title: 'Practical Workshops — HPS Group Experts', chair: 'HPS Group' },
      { time: '11:00–11:30', type: 'break', title: 'Coffee Break' },
      { time: '11:30–12:00', type: 'parallel', sessions: [
        { id: 's14', num: 14, title: 'AI-Powered Language Technologies and Agentic Systems for Smart Services', chairs: ['Housni Mohamed', 'Kandali Khalid', 'Ellaky Zineb'], papers: [
          { id: '81', title: 'Dual LoRA with Dynamic Gating for Emotion-Adaptive Client Service Chatbots in Smart City Banking', authors: 'Kasbouya, Mohammed; Sael, Nawal' },
          { id: '86', title: 'Sentiment Classification in Moroccan News Comments: A Comparative Study of Pretrained Arabic Transformers with a Focus on Near-Neutral Sentiment', authors: 'AMZIL, Taoufik; AIT ABDELOUAHID, Rachida; SAEL, NAWAL' },
          { id: '10', title: 'The Two-Stage Blueprint: How Generative Pre-Training and Fine-Tuning Forged the Foundation Model Paradigm', authors: 'Singh, Shantanu' },
          { id: '35', title: 'Prompt Sensitivity and Large Language Model Performance in Metaphor Detection: A Comparative Experimental Analysis', authors: 'Banou, Zouheir; Sakhi, Hasnae; Matrane, Yassir; Alaoui, Fatima-Zahra; El Jiani, Laila; el filali, Sanaa; Benlahmar, El Habib' },
          { id: '66', title: 'From Translation to Misunderstanding Prevention: An Arabic Dataset for Smart-City Digital Literacy in Morocco', authors: 'Essaadani, Khalid; Ziti, Soumia' },
        ]},
        { id: 's15', num: 15, title: 'Smart & Complex Systems', chairs: ['El Mostafa Rajaalah', 'Ouchra Hafsa', 'Ounacer Soumaya'], papers: [
          { id: '29', title: 'Systemic Urban Entanglement Theory (SUET): Towards a Mathematical and Predictive Modelling of Intelligent Urban Ecosystems', authors: 'belkadi, hakim' },
          { id: '8',  title: 'NeuroSymbolicController: AI-Driven Safe Abstraction Synthesis for Robotic Task Planning Using Ellipsoidal State Covering and MCR Frameworks', authors: 'Singh, Shantanu' },
          { id: '48', title: 'Scalable Self-Healing for Smart City IoT Ecosystems: Integrating Trust-Aware Multi-Agent Systems', authors: 'Mohamed, Amchia; LAILA, MACHKOUR; EL BRAHIMI, MERIEM; GHAZOUANI, MOHAMED' },
          { id: '1',  title: 'AI-Driven IoT Smart Home Automation System for Predictive Appliance Control and Energy Optimization', authors: 'Lamba, Dr. Anil Kumar; J, Dr Arul Sindiya; A., Dr. Sasi Kumar; Mary, M Flora; N, Mallanagowda; Koyyeda, Dr. Rajashekher' },
          { id: '6',  title: 'FedQR-Attend: A Federated Edge Intelligence and Adaptive-Token QR-Based Offline-First Attendance Management System for Rural School Deployments', authors: 'Sharma, Aakansha' },
          { id: '9',  title: 'AI-Assisted Virtual Screening and Molecular Docking for Smart Health: A Systematic Literature Review', authors: 'ELYAZYD, Oumaima; CHTITA, Samir; AIT DAOUD, Mohammed' },
          { id: '78', title: 'YOLO-Based Pedestrian Detection and Monocular Distance Estimation', authors: 'HAMZA, ASSEMLALI' },
        ]},
        { id: 'student', num: '★', isCompetition: true, title: 'Project presentation — Best Innovative Project Award', chairs: ['Sekhara Youssef', 'Benabbou Faouzia', 'Ouahabi Sara', 'Ettaoufik Abdelaziz', 'Sael Nawal'], papers: [
          { id: 'P1', title: 'Smart Bakery: AI-Driven Supply Chain Optimization and Demand Forecasting for Urban Environments', authors: 'kachmar, Mohamed Taha; Essadiki, ibtissam; TALHOUT, Soumia; basslam, Yahya; louardi, adnane' },
          { id: 'P2', title: 'Intelligent Drone-Based Thermal Inspection for Solar Energy Infrastructure', authors: 'kraichy, Mohamed akrame; en-najdy, hajar' },
          { id: 'P3', title: 'AI-Based Groundwater Recharge Prediction Using LSTM and Geospatial Data', authors: 'EN-NAJDY, hajar; kraichy, Mohamed akrame' },
          { id: 'P4', title: 'SmartQuiz AI: Intelligent Web Platform for Automated Quiz Creation and Real-Time Student Assessment', authors: 'Akil, Salma; Nakhla, Aya' },
          { id: 'P5', title: 'AI Bioacoustic Detection for Sustainable Agriculture', authors: 'ED-DAIF, Amina; Benabbou, Faouzia; Sael, Nawal; Sassoui, Abdelbasset' },
          { id: 'P6', title: 'DyslexiEase: An AI-Powered Assistive Platform for Text Simplification and Accessibility', authors: 'SALAH EDDINE, TOIATI; Salma, Qachbale; ESSABIRI, ANOUAR' },
          { id: 'P7', title: 'KHIDMADAR: A Web Platform for Home Service Management in Morocco', authors: 'Zarouki, Meryem; Sahim, Maroua' },
          { id: 'P8', title: 'End-to-End Data Pipeline: Data Ingestion, Transformation, and Analytical Visualization', authors: 'Mohammed, Anouar' },
        ]},
      ]},
      { time: '12:30–13:00', type: 'award', title: 'Best Innovative Students Project Award ceremony', description: 'Finals and prize ceremony for the Best Innovative Students Project Award competition' },
      { time: '13:00–13:30', type: 'ceremony', title: 'Official Closing Ceremony', description: "Official closing of ICISCT 2026 — Faculty of Sciences Ben M'Sik, Casablanca, Morocco" },
    ]
  }
];

const SessionCard = ({ session, expanded, onToggle }) => (
  <div className={`session-card ${session.isCompetition ? 'competition' : ''}`}>
    <button className="session-header" onClick={onToggle}>
      <div className="session-num-badge">{session.isCompetition ? <Trophy size={14}/> : `S${session.num}`}</div>
      <div className="session-meta">
        <span className="session-title">
          {session.title}
          {session.online && <span className="session-online-badge"><Globe size={10}/> ONLINE</span>}
        </span>
        {session.chairs.length > 0 && (
          <span className="session-chairs"><Users size={11}/> {session.chairs.join(' · ')}</span>
        )}
      </div>
      <div className={`paper-count-badge ${expanded ? 'open' : ''}`}>
        <BookOpen size={12}/> {session.papers.length}
        <ChevronDown size={14} className="chevron"/>
      </div>
    </button>
    <AnimatePresence>
      {expanded && (
        <motion.div
          className="papers-list"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {session.papers.map((p, i) => (
            <motion.div
              key={p.id}
              className="paper-row"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <span className="paper-id">#{String(p.id).padStart(2,'0')}</span>
              <div className="paper-body">
                <span className="paper-title">{p.title}</span>
                <span className="paper-authors">{p.authors}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ProgrammeView = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [expanded, setExpanded] = useState(new Set());

  const toggle = (id) => {
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const day = days[activeDay];

  const renderSlot = (slot, i) => {
    if (slot.type === 'break') return (
      <div key={i} className={`slot break-slot ${slot.isLunch ? 'lunch' : ''}`}>
        <span className="slot-time">{slot.time}</span>
        <div className="break-bar"><Coffee size={14}/><span>{slot.title}</span></div>
      </div>
    );

    if (slot.type === 'logistics') return (
      <div key={i} className="slot logistics-slot">
        <span className="slot-time">{slot.time}</span>
        <div className="logistics-pill">
          <span className="slot-title-text">{slot.title}</span>
          {slot.description && <span className="logistics-desc">{slot.description}</span>}
        </div>
      </div>
    );

    if (slot.type === 'ceremony') return (
      <motion.div key={i} className="slot ceremony-slot" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}}>
        <span className="slot-time">{slot.time}</span>
        <div className="ceremony-card">
          <div className="ceremony-tag"><Award size={13}/> CEREMONY</div>
          <h3 className="ceremony-title">{slot.title}</h3>
          {slot.items && <ul className="ceremony-items">{slot.items.map((item,j) => <li key={j}>{item}</li>)}</ul>}
          {slot.description && <p className="ceremony-desc">{slot.description}</p>}
        </div>
      </motion.div>
    );

    if (slot.type === 'plenary') return (
      <motion.div key={i} className="slot plenary-slot" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}}>
        <span className="slot-time">{slot.time}</span>
        <div className="plenary-card">
          <div className="plenary-num">PLENARY {slot.num}</div>
          <h3 className="plenary-title">{slot.title}</h3>
          <div className="plenary-speaker"><Mic2 size={14}/> <strong>{slot.speaker}</strong> — {slot.affiliation}</div>
          {slot.description && <div className="plenary-desc">{slot.description}</div>}
          <div className="plenary-chair"><Users size={12}/> Chair: {slot.chair}</div>
        </div>
      </motion.div>
    );

    if (slot.type === 'workshop') return (
      <motion.div key={i} className="slot workshop-slot" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}}>
        <span className="slot-time">{slot.time}</span>
        <div className="workshop-card">
          <div className="workshop-tag"><Zap size={13}/> WORKSHOP</div>
          <h3 className="workshop-title">{slot.title}</h3>
          <div className="plenary-chair"><Users size={12}/> {slot.chair}</div>
        </div>
      </motion.div>
    );

    if (slot.type === 'award') return (
      <motion.div key={i} className="slot award-slot" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}}>
        <span className="slot-time">{slot.time}</span>
        <div className="award-card">
          <div className="award-tag"><Trophy size={13}/> AWARD</div>
          <h3 className="award-title">{slot.title}</h3>
          <p className="award-desc">{slot.description}</p>
        </div>
      </motion.div>
    );

    if (slot.type === 'parallel') return (
      <motion.div key={i} className="slot parallel-slot" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}}>
        <div className="parallel-block">
          <div className="parallel-label-row">
            <span className="slot-time">{slot.time}</span>
            <div className="parallel-label">
              <Zap size={13}/>
              {slot.sessions.length} PARALLEL SESSIONS
              {slot.badge && <span className="online-badge"><Globe size={11}/> {slot.badge}</span>}
            </div>
          </div>
          <div className="sessions-grid">
            {slot.sessions.map(s => (
              <SessionCard key={s.id} session={s} expanded={expanded.has(s.id)} onToggle={() => toggle(s.id)}/>
            ))}
          </div>
        </div>
      </motion.div>
    );
    return null;
  };

  return (
    <div className="programme-wrapper">
      <div className="container">
        <div className="prog-header">
          <div className="prog-header-left">
            <div className="prog-eyebrow">ICISCT 2026 — OFFICIAL PROGRAMME</div>
            <h1 className="prog-title">Conference <span className="prog-accent">Programme</span></h1>
            <p className="prog-meta">Faculty of Sciences Ben M'Sik, Hassan II University of Casablanca · June 25–27, 2026</p>
          </div>
          <a href={`${ASSET_BASE}ICISCT 2026 Brochure Cover (A4).pdf`} download className="download-btn">
            <Download size={16}/><span>Download Programme</span>
          </a>
        </div>

        <div className="day-tabs">
          {days.map((d, i) => (
            <button key={d.id} className={`day-tab ${activeDay === i ? 'active' : ''}`}
              onClick={() => { setActiveDay(i); setExpanded(new Set()); }}>
              <span className="day-label">{d.label}</span>
              <span className="day-date">{d.date}</span>
              <span className="day-theme">{d.theme}</span>
              {activeDay === i && <motion.div layoutId="day-indicator" className="day-indicator"/>}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeDay} className="timeline"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
            {day.slots.map((slot, i) => renderSlot(slot, i))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        .programme-wrapper { padding: 40px 0 80px; }
        .prog-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 30px; margin-bottom: 40px; padding-bottom: 40px; border-bottom: 1px solid var(--border-glass); }
        .prog-eyebrow { font-size: 0.6rem; font-weight: 900; letter-spacing: 3px; color: var(--accent); opacity: 0.7; margin-bottom: 10px; }
        .prog-title { font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 900; line-height: 1; margin-bottom: 12px; color: #fff; }
        .prog-accent { background: linear-gradient(90deg, var(--accent) 0%, #80f7ff 50%, var(--accent) 100%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: headline-shimmer 4s linear infinite; }
        .prog-meta { font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px; }
        .download-btn { display: flex; align-items: center; gap: 10px; background: rgba(0,229,255,0.08); border: 1px solid rgba(0,229,255,0.3); color: var(--accent); padding: 12px 22px; border-radius: 10px; font-weight: 700; font-size: 0.85rem; text-decoration: none; white-space: nowrap; transition: 0.3s; flex-shrink: 0; margin-top: 8px; }
        .download-btn:hover { background: var(--accent); color: var(--primary); box-shadow: 0 0 20px rgba(0,229,255,0.3); }

        .day-tabs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 40px; }
        .day-tab { position: relative; display: flex; flex-direction: column; gap: 4px; padding: 18px 20px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 14px; cursor: pointer; text-align: left; transition: 0.3s; overflow: hidden; }
        .day-tab:hover { background: rgba(255,255,255,0.05); border-color: rgba(0,229,255,0.3); }
        .day-tab.active { background: rgba(0,229,255,0.06); border-color: var(--accent); }
        .day-label { font-size: 0.65rem; font-weight: 900; letter-spacing: 2px; color: var(--accent); }
        .day-date { font-size: 1rem; font-weight: 800; color: #fff; }
        .day-theme { font-size: 0.75rem; color: var(--text-secondary); }
        .day-indicator { position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--accent); box-shadow: 0 0 10px var(--accent); }

        .timeline { display: flex; flex-direction: column; gap: 8px; }
        .slot { display: flex; gap: 20px; align-items: flex-start; }
        .slot-time { flex-shrink: 0; width: 110px; font-size: 0.72rem; font-weight: 700; color: rgba(255,255,255,0.35); padding-top: 14px; letter-spacing: 0.5px; font-family: monospace; }

        .break-slot { align-items: center; padding: 6px 0; }
        .break-bar { flex: 1; display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.2); font-size: 0.75rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; border-top: 1px dashed rgba(255,255,255,0.06); padding: 8px 0; }
        .break-slot.lunch .break-bar { color: rgba(255,200,100,0.4); border-color: rgba(255,200,100,0.1); }

        .logistics-slot { align-items: center; }
        .logistics-pill { flex: 1; display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 8px; padding: 10px 16px; }
        .slot-title-text { font-size: 0.85rem; font-weight: 700; color: rgba(255,255,255,0.7); }
        .logistics-desc { font-size: 0.75rem; color: var(--text-secondary); }

        .plenary-card { flex: 1; background: linear-gradient(135deg, rgba(0,229,255,0.06) 0%, rgba(0,80,160,0.1) 100%); border: 1px solid rgba(0,229,255,0.25); border-left: 3px solid var(--accent); border-radius: 14px; padding: 20px 24px; position: relative; overflow: hidden; transition: 0.3s; }
        .plenary-card::before { content: ''; position: absolute; top: 0; right: 0; width: 120px; height: 120px; background: radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%); pointer-events: none; }
        .plenary-card:hover { border-color: var(--accent); box-shadow: 0 8px 30px rgba(0,229,255,0.1); }
        .plenary-num { font-size: 0.6rem; font-weight: 900; letter-spacing: 3px; color: var(--accent); margin-bottom: 8px; }
        .plenary-title { font-size: 1rem; font-weight: 800; color: #fff; line-height: 1.4; margin-bottom: 12px; }
        .plenary-speaker { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: var(--accent); font-weight: 600; margin-bottom: 6px; }
        .plenary-desc { font-size: 0.82rem; color: rgba(255,255,255,0.55); line-height: 1.5; margin-bottom: 6px; }
        .plenary-chair { display: flex; align-items: center; gap: 6px; font-size: 0.72rem; color: rgba(255,255,255,0.35); }

        .ceremony-card { flex: 1; background: linear-gradient(135deg, rgba(255,180,50,0.06) 0%, rgba(200,100,0,0.06) 100%); border: 1px solid rgba(255,180,50,0.2); border-left: 3px solid #FFB432; border-radius: 14px; padding: 20px 24px; }
        .ceremony-tag { display: inline-flex; align-items: center; gap: 6px; font-size: 0.6rem; font-weight: 900; letter-spacing: 2px; color: #FFB432; margin-bottom: 10px; }
        .ceremony-title { font-size: 1rem; font-weight: 800; color: #fff; margin-bottom: 12px; }
        .ceremony-items { list-style: none; display: flex; flex-direction: column; gap: 6px; padding: 0; }
        .ceremony-items li { font-size: 0.82rem; color: var(--text-secondary); padding-left: 16px; position: relative; }
        .ceremony-items li::before { content: '›'; position: absolute; left: 0; color: #FFB432; font-weight: 900; }
        .ceremony-desc { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; }

        .workshop-card { flex: 1; background: linear-gradient(135deg, rgba(150,100,255,0.07) 0%, rgba(50,0,150,0.08) 100%); border: 1px solid rgba(150,100,255,0.25); border-left: 3px solid #9B6DFF; border-radius: 14px; padding: 20px 24px; }
        .workshop-tag { display: inline-flex; align-items: center; gap: 6px; font-size: 0.6rem; font-weight: 900; letter-spacing: 2px; color: #9B6DFF; margin-bottom: 10px; }
        .workshop-title { font-size: 1rem; font-weight: 800; color: #fff; margin-bottom: 10px; }

        .award-card { flex: 1; background: linear-gradient(135deg, rgba(255,215,0,0.07) 0%, rgba(200,150,0,0.07) 100%); border: 1px solid rgba(255,215,0,0.25); border-left: 3px solid #FFD700; border-radius: 14px; padding: 20px 24px; }
        .award-tag { display: inline-flex; align-items: center; gap: 6px; font-size: 0.6rem; font-weight: 900; letter-spacing: 2px; color: #FFD700; margin-bottom: 10px; }
        .award-title { font-size: 1rem; font-weight: 800; color: #fff; margin-bottom: 8px; }
        .award-desc { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; }

        .parallel-slot { display: block; }
        .parallel-block { width: 100%; }
        .parallel-label-row { display: flex; align-items: center; gap: 20px; margin-bottom: 10px; }
        .parallel-label { display: flex; align-items: center; gap: 8px; font-size: 0.65rem; font-weight: 900; letter-spacing: 2px; color: var(--accent); opacity: 0.7; }
        .online-badge { display: inline-flex; align-items: center; gap: 5px; background: rgba(100,200,100,0.1); border: 1px solid rgba(100,200,100,0.3); color: #6FD86F; padding: 2px 8px; border-radius: 20px; font-size: 0.6rem; font-weight: 800; letter-spacing: 1px; margin-left: 6px; }
        .sessions-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); gap: 10px; }

        .session-card { background: rgba(11,32,70,0.3); border: 1px solid var(--border-glass); border-radius: 12px; overflow: hidden; transition: 0.3s; }
        .session-card:hover { border-color: rgba(0,229,255,0.2); }
        .session-card.competition { background: rgba(255,215,0,0.04); border-color: rgba(255,215,0,0.2); }
        .session-header { width: 100%; display: flex; align-items: flex-start; gap: 12px; padding: 14px 16px; background: transparent; border: none; cursor: pointer; text-align: left; }
        .session-num-badge { flex-shrink: 0; width: 32px; height: 32px; background: rgba(0,229,255,0.1); border: 1px solid rgba(0,229,255,0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 900; color: var(--accent); }
        .competition .session-num-badge { background: rgba(255,215,0,0.1); border-color: rgba(255,215,0,0.3); color: #FFD700; }
        .session-meta { flex: 1; display: flex; flex-direction: column; gap: 4px; }
        .session-title { font-size: 0.82rem; font-weight: 700; color: #fff; line-height: 1.3; display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }
        .session-online-badge { display: inline-flex; align-items: center; gap: 4px; background: rgba(100,200,100,0.1); border: 1px solid rgba(100,200,100,0.3); color: #6FD86F; padding: 1px 6px; border-radius: 10px; font-size: 0.55rem; font-weight: 800; letter-spacing: 0.5px; flex-shrink: 0; }
        .session-chairs { display: flex; align-items: center; gap: 5px; font-size: 0.68rem; color: rgba(255,255,255,0.35); line-height: 1.4; }
        .paper-count-badge { display: flex; align-items: center; gap: 5px; flex-shrink: 0; font-size: 0.65rem; font-weight: 800; color: rgba(255,255,255,0.3); padding: 4px 8px; background: rgba(255,255,255,0.04); border-radius: 20px; transition: 0.3s; }
        .paper-count-badge .chevron { transition: transform 0.3s; }
        .paper-count-badge.open .chevron { transform: rotate(180deg); }

        .papers-list { overflow: hidden; border-top: 1px solid rgba(255,255,255,0.04); }
        .paper-row { display: flex; gap: 12px; align-items: flex-start; padding: 10px 16px; border-bottom: 1px solid rgba(255,255,255,0.03); transition: 0.2s; }
        .paper-row:hover { background: rgba(0,229,255,0.03); }
        .paper-row:last-child { border-bottom: none; }
        .paper-id { flex-shrink: 0; font-family: monospace; font-size: 0.65rem; font-weight: 700; color: var(--accent); opacity: 0.7; padding-top: 2px; width: 28px; }
        .paper-body { display: flex; flex-direction: column; gap: 3px; }
        .paper-title { font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.85); line-height: 1.4; }
        .paper-authors { font-size: 0.68rem; color: rgba(255,255,255,0.35); }

        @media (max-width: 900px) {
          .prog-header { flex-direction: column; }
          .day-tabs { grid-template-columns: 1fr; }
          .slot-time { width: 80px; font-size: 0.65rem; }
          .sessions-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .slot { gap: 10px; }
          .slot-time { width: 70px; }
          .plenary-card, .ceremony-card, .workshop-card, .award-card { padding: 14px 16px; }
        }
      `}</style>
    </div>
  );
};

export default ProgrammeView;
