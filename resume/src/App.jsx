import React, { useCallback, useState, useEffect } from 'react';

const resumeData = {
  name: "Alexander Kane",
  tagline: "Technical Account Manager | Security & Cloud Infrastructure Specialist",
  contact: {
    phone: "302-650-4556",
    email: "alexkane404@yahoo.com"
  },
  summary: "Technical professional with hands-on experience in security operations, identity management, and cloud infrastructure. Skilled at translating complex technical concepts for both technical and executive stakeholders and driving adoption across diverse customer environments. Focused on security posture improvement, proactive risk reduction, and clear communication—aligning technical delivery with customer success goals. Experience supporting multiple accounts, coordinating cross-functional teams, and documenting procedures to improve consistency and resolution efficiency.",
  skills: [
    {
      category: "Security",
      items: "Security Event Monitoring & Log Analysis | EDR | IAM (Active Directory & Entra ID) | FortiGate Firewall Administration | Security hardening & policy management"
    },
    {
      category: "Cloud & Infrastructure",
      items: "AWS Cloud Deployment | Windows Server | VMware ESXI | Linux (Debian-based)"
    },
    {
      category: "Identity & Collaboration",
      items: "Active Directory & Entra ID | Microsoft 365 | SharePoint Management"
    },
    {
      category: "Networking",
      items: "Cisco AP & Switch | VPN Management | Ubiquiti Network Administration | Network Troubleshooting & Diagnostics"
    },
    {
      category: "Automation & Operations",
      items: "Python Scripting | PowerShell | Bash | Batch Scripting | Kaseya RMM | Kaseya EDR"
    },
    {
      category: "Customer Success",
      items: "Technical Communication | Customer Success & Stakeholder Management"
    }
  ],
  experience: [
    {
      company: "Assurance Media",
      location: "Wilmington, DE",
      title: "Technical Account Manager",
      date: "January 2023 — Present",
      responsibilities: [
        { text: "Manage all aspects of the managed services practice, including service delivery across 55+ customer accounts, technical escalations, and end-to-end accountability for customer satisfaction and retention — maintaining 0% involuntary churn across the portfolio.", highlight: true },
        { text: "Hired to build and grow the managed services practice; coordinate a growing team, workflows, and service delivery standards to ensure consistent quality and timely resolution across the customer portfolio; mentor technical staff on best practices and customer communication.", highlight: true },
        { text: "Oversee SLA compliance, performance metrics, and service health across accounts; drive continuous improvement initiatives to enhance operational efficiency, reduce incident response time, and improve customer outcomes.", highlight: true },
        { text: "Act as primary technical point of contact for diverse customer environments; deliver full lifecycle support for servers, desktops, firewalls, networking, and VOIP — including UCaaS administration for 33 customers on Intermedia (phone and email) — while translating technical details into clear, actionable guidance for non-technical users and management.", highlight: false },
        { text: "Drive security outcomes by monitoring and responding to EDR alerts, applying CISA-recommended mitigations, and advising on security posture across 20+ customer environments — enabling proactive risk reduction aligned with threat intelligence and active advisories.", highlight: false },
        { text: "Use log and system data analysis to identify recurring issues, performance gaps, and security risks; deliver proactive recommendations that improve security posture and operational efficiency across supported accounts.", highlight: false },
        { text: "Manage IAM and authentication (on-prem Active Directory, Microsoft 365, SharePoint, Entra ID); support secure access, provisioning, and adoption across customer environments.", highlight: false },
        { text: "Lead coordination for solution deployments and upgrades—including testing, validation, and change management—to ensure smooth adoption and minimal disruption; set clear expectations for users during transitions.", highlight: false },
        { text: "Configure and maintain firewalls (Ubiquiti, FortiGate) — policy management, site-to-site VPNs, VLAN segmentation, and security hardening — across 45+ customer environments.", highlight: false },
        { text: "Document procedures, environment details, and support notes to improve handoffs, consistency, and resolution efficiency for customers and internal teams.", highlight: false }
      ]
    },
    {
      company: "GT USA Wilmington",
      location: "Wilmington, DE",
      title: "Facility Manager",
      date: "November 2021 — 2023",
      responsibilities: [
        { text: "Stepped into a cross-functional management role to build leadership experience — overseeing facility maintenance, building controls, and budget compliance across 1,000,000+ sq ft of cargo space and 308 acres of grounds at the Port of Wilmington.", highlight: false },
        { text: "Led and managed a union team of 40+; cultivated relationships with government stakeholders including Fire Marshals, County & City Inspectors, CBP, Coast Guard, and DNREC.", highlight: false },
        { text: "Gained hands-on experience with building automation and control systems (WebCTRL) for large-scale HVAC management — cross-disciplinary knowledge that bridges OT and IT environments and informs a broader understanding of infrastructure systems.", highlight: false },
        { text: "Served as incident commander for facility emergencies including power outages, environmental damage, and structural incidents.", highlight: false },
        { text: "Managed all facility installations and upgrades as project manager, overseeing execution from conception to completion across two active sites.", highlight: false }
      ]
    },
    {
      company: "GT USA Wilmington",
      location: "Wilmington, DE",
      title: "Network Administrator",
      date: "October 2018 — November 2021",
      responsibilities: [
        { text: "Configured and maintained Cisco switches and access points; built Wi-Fi networks (Mesh, Autonomous, Controller-based) across multiple warehouses and tenants using Aruba, Cisco, Altai, and Ubiquiti.", highlight: false },
        { text: "Deployed and maintained StayLinked server and handheld clients; created VLANs for multiple company networks and tenants; installed access points (Fiber & Cat6/6A) across sites.", highlight: false },
        { text: "Leveraged Bash and Python scripting for kiosk integration, remote monitoring, and reporting; engineered Batch scripts for deployment and compatibility (e.g., legacy VB/Oracle on Windows 10/11).", highlight: false },
        { text: "Used VMware ESXI for server backups; managed servers on AWS.", highlight: false }
      ]
    },
    {
      company: "Diamond State Port Corporation",
      location: "Wilmington, DE",
      title: "Network Engineer",
      date: "December 2014 — October 2018",
      responsibilities: [
        { text: "Performed computer diagnosis and repair; spearheaded Cat5/6/6A runs for access points and switches across warehouse locations.", highlight: false },
        { text: "Created and installed tamper-proof kiosk enclosures in 14 warehouse locations to enhance security and durability; maintained kiosk hardware and scanner networks.", highlight: false },
        { text: "Installed and managed MDM (Scalefusion, Mobilock) on inventory tablets; consolidated IT asset inventories and implemented sign-out and tracking processes.", highlight: false },
        { text: "Organized infrastructure installations (access points, switches, NEMA boxes) for new and existing sites.", highlight: false }
      ]
    }
  ],
  education: {
    school: "Newark High School",
    major: "Major in CAD Engineering",
    certifications: [
      "Kaseya EDR Certified Administrator — Kaseya, 2025"
    ]
  }
};

function Header({ name, tagline, contact, onExport, darkMode, onToggleDark }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>{name}</h1>
        <p className="tagline">{tagline}</p>
        <div className="contact-info">
          <span>{contact.phone}</span>
          <a href={`mailto:${contact.email}`} rel="noopener noreferrer">{contact.email}</a>
        </div>
        <div className="header-actions no-print">
          <button className="export-btn" onClick={() => { document.body.classList.add('fade-out'); setTimeout(() => { window.location.href = '/Alexander_Kane/'; }, 400); }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back
          </button>
          <button className="export-btn" onClick={onExport}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export PDF
          </button>
          <button className="export-btn" onClick={onToggleDark} aria-label="Toggle dark mode">
            {darkMode ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            )}
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </header>
  );
}

function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

function Summary({ text }) {
  return <p className="summary">{text}</p>;
}

function Skills({ skills }) {
  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-category">
          <h3>{skill.category}</h3>
          <p>{skill.items}</p>
        </div>
      ))}
    </div>
  );
}

function Job({ job }) {
  return (
    <div className="job">
      <div className="job-header">
        <div>
          <span className="job-company">{job.company}</span>
          <span className="job-location"> | {job.location}</span>
        </div>
        <span className="job-date">{job.date}</span>
      </div>
      <p className="job-title">{job.title}</p>
      <div className="job-description">
        <ul>
          {job.responsibilities.map((resp, index) => (
            <li
              key={index}
              className={resp.highlight ? 'highlight' : ''}
            >
              {resp.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Education({ education }) {
  return (
    <div className="education">
      <h3>{education.school}</h3>
      <ul className="edu-list">
        <li>{education.major}</li>
      </ul>
      {education.certifications && education.certifications.length > 0 && (
        <>
          <h3 className="cert-heading">Certifications</h3>
          <ul className="edu-list">
            {education.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleExport = useCallback(() => {
    window.print();
  }, []);

  const handleToggleDark = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  return (
    <div className="page-wrapper">
      <div className="container">
        <Header
          name={resumeData.name}
          tagline={resumeData.tagline}
          contact={resumeData.contact}
          onExport={handleExport}
          darkMode={darkMode}
          onToggleDark={handleToggleDark}
        />

        <main className="content">
          <Section title="Professional Summary">
            <Summary text={resumeData.summary} />
          </Section>

          <Section title="Technical Skills">
            <Skills skills={resumeData.skills} />
          </Section>

          <Section title="Professional Experience">
            {resumeData.experience.map((job, index) => (
              <Job key={index} job={job} />
            ))}
          </Section>

          <Section title="Education">
            <Education education={resumeData.education} />
          </Section>
        </main>
      </div>
    </div>
  );
}

export default App;
