// Utility to generate Facebook profile data for Keisha Williams
import { getFakeImageUrl } from './fakeImages';

export interface FacebookProfileData {
  name: string;
  friends: string;
  photos: number;
  posts: Array<{
    author: string;
    authorAvatar: string;
    time: string;
    content: string;
    likes: number;
    comments: number;
    shares?: number;
    image?: string;
  }>;
  about: {
    work?: string[];
    education?: string[];
    places?: string[];
    contact?: string;
    basic?: string[];
  };
  friendsList: Array<{
    name: string;
    avatar: string;
  }>;
  peopleYouMayKnow: Array<{
    name: string;
    avatar: string;
  }>;
}

export const generateFacebookProfile = (resultId: string): FacebookProfileData => {
  // All Keisha Williams results
  return {
    name: 'Keisha Williams',
    friends: '850 friends',
    photos: 124,
    posts: [
      {
        author: 'Keisha Williams',
        authorAvatar: resultId,
        time: '3d',
        content: 'Excited to announce the launch of our new community development initiative! Looking forward to working together to build stronger neighborhoods.',
        likes: 156,
        comments: 23,
        shares: 8,
        image: 'community-event'
      },
      {
        author: 'Keisha Williams',
        authorAvatar: resultId,
        time: '1w',
        content: 'Mentoring the next generation of nonprofit leaders. The future is bright! 🌟',
        likes: 203,
        comments: 34,
        shares: 12,
        image: 'mentoring'
      },
      {
        author: 'Keisha Williams',
        authorAvatar: resultId,
        time: '2w',
        content: 'Just returned from the annual nonprofit leadership conference. So many inspiring conversations and new partnerships formed!',
        likes: 178,
        comments: 28,
        shares: 10,
        image: 'conference'
      }
    ],
    about: {
      work: ['Director of Community Programs at Urban League', 'Nonprofit Leadership Institute'],
      education: ['Howard University'],
      places: ['Atlanta, Georgia'],
      basic: ['Active in community development and social justice']
    },
    friendsList: [
      { name: 'Maria Garcia', avatar: 'maria' },
      { name: 'James Thompson', avatar: 'james' },
      { name: 'Patricia Robinson', avatar: 'patricia' },
      { name: 'David Lewis', avatar: 'david' },
      { name: 'Angela Smith', avatar: 'angela' },
      { name: 'Robert Johnson', avatar: 'robert' },
      { name: 'Jessica Williams', avatar: 'jessica' },
      { name: 'Michael Brown', avatar: 'michael' },
      { name: 'Sarah Davis', avatar: 'sarah' }
    ],
    peopleYouMayKnow: [
      { name: 'Amanda Foster', avatar: 'amanda' },
      { name: 'Christopher Lee', avatar: 'christopher' },
      { name: 'Michelle Park', avatar: 'michelle' },
      { name: 'Daniel Martinez', avatar: 'daniel' },
      { name: 'Nicole Anderson', avatar: 'nicole' }
    ]
  };
};
