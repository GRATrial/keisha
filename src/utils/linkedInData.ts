// Utility to generate LinkedIn profile data for Keisha Williams
import { getFakeImageUrl } from './fakeImages';

export interface LinkedInProfileData {
  name: string;
  headline: string;
  location: string;
  link: string;
  followers: string;
  connections: string;
  about?: string;
  analytics: {
    profileViews: number;
    postImpressions: number;
    searchAppearances: number;
  };
  activity: Array<{
    type: 'post' | 'comment';
    content: string;
    likes: number;
    comments: number;
    time: string;
    image?: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    location?: string;
    logo?: string;
    description?: string[];
  }>;
  education: Array<{
    school: string;
    degree: string;
    field?: string;
    years?: string;
  }>;
  skills: string[];
  suggestedProfiles: Array<{
    name: string;
    title: string;
    company: string;
    seed: string;
  }>;
}

export const generateLinkedInProfile = (resultId: string): LinkedInProfileData => {
  // Keisha Williams - Community Development & Nonprofit Leadership
  return {
    name: 'Keisha Williams',
    headline: 'Executive Director, Community Empowerment | Nonprofit Leadership | Social Justice Advocate',
    location: 'Atlanta, Georgia, United States · Contact info',
    link: 'https://linkedin.com/in/keishawilliams-community',
    followers: '1,250',
    connections: '1,500+',
    about: 'Dedicated nonprofit leader passionate about community development, social equity, and organizational transformation. As Director of Community Programs, I develop and implement strategic initiatives that empower underrepresented communities. My expertise spans nonprofit management, grant writing, community engagement, and leadership development. I am committed to building sustainable programs that create meaningful, lasting change in neighborhoods and institutions.',
    analytics: {
      profileViews: 78,
      postImpressions: 245,
      searchAppearances: 42
    },
    activity: [
      {
        type: 'post',
        content: 'Thrilled to launch our new community development initiative! This program will provide resources and support to over 500 families in underserved neighborhoods. Together, we can build stronger communities.',
        likes: 142,
        comments: 21,
        time: '2w',
        image: 'community-launch'
      },
      {
        type: 'post',
        content: 'Just returned from the National Nonprofit Leadership Conference. Inspired by the innovative approaches to community empowerment being implemented across the country. Ready to bring these insights back to our community.',
        likes: 89,
        comments: 12,
        time: '1mo',
        image: 'conference'
      }
    ],
    experience: [
      {
        title: 'Executive Director',
        company: 'Community Empowerment Institute · Full-time',
        duration: 'Mar 2021 - Present · 4 yrs',
        location: 'Atlanta, Georgia, United States · On-site',
        description: [
          'Lead strategic planning and operational management for nonprofit organization',
          'Develop and implement community development programs serving 2,000+ individuals annually',
          'Manage grant writing, funding relationships, and organizational budget',
          'Oversee team of 15+ staff members and coordinate volunteers'
        ]
      },
      {
        title: 'Director of Community Programs',
        company: 'Urban League · Full-time',
        duration: 'Aug 2018 - Feb 2021 · 2 yrs 7 mos',
        location: 'Atlanta, Georgia, United States · On-site',
        description: [
          'Designed and implemented community engagement and capacity-building programs',
          'Managed partnerships with 20+ community organizations and stakeholders',
          'Directed program evaluation and impact measurement initiatives',
          'Facilitated leadership development workshops and training sessions'
        ]
      },
      {
        title: 'Program Coordinator',
        company: 'Nonprofit Leadership Institute · Full-time',
        duration: 'Jun 2016 - Jul 2018 · 2 yrs 2 mos',
        location: 'Atlanta, Georgia, United States · On-site',
        description: [
          'Coordinated community outreach and engagement initiatives',
          'Developed educational workshops and training materials',
          'Supported grant research and proposal development',
          'Managed program logistics and participant communications'
        ]
      }
    ],
    education: [
      {
        school: 'Howard University',
        degree: 'Master of Public Administration - MPA',
        field: 'Nonprofit Management',
        years: '2014 - 2016'
      },
      {
        school: 'Howard University',
        degree: 'Bachelor of Science - BS',
        field: 'Business Administration',
        years: '2010 - 2014'
      }
    ],
    skills: ['Nonprofit Management', 'Community Development', 'Grant Writing', 'Leadership Development', 'Program Development', 'Strategic Planning', 'Public Speaking', 'Budget Management', 'Fundraising', 'Social Equity'],
    suggestedProfiles: [
      { name: 'Patricia Johnson', title: 'Nonprofit Executive Director | Community Impact', company: '2nd', seed: 'patricia' },
      { name: 'James Thompson', title: 'Senior Program Manager | Community Development', company: '2nd', seed: 'james' },
      { name: 'Angela Davis', title: 'Community Outreach Coordinator | Social Justice', company: '3rd+', seed: 'angela' },
      { name: 'Michael Brown', title: 'Nonprofit Board Member | Community Advocate', company: '3rd+', seed: 'michael' },
      { name: 'Sarah Williams', title: 'Grants Manager | Nonprofit Development', company: '3rd+', seed: 'sarah' }
    ]
  };
};

export const getCompanyLogoUrl = (company: string, size: number = 40) => {
  const domainMap: Record<string, string> = {
    'Community Empowerment Institute': 'communityempowerment.org',
    'Urban League': 'urbanleague.org',
    'Nonprofit Leadership Institute': 'nonprofitleadership.org',
    'Howard University': 'howard.edu'
  };

  const domain = domainMap[company] || 'linkedin.com';
  return `https://logo.clearbit.com/${domain}?size=${size}`;
};
