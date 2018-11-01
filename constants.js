// @flow
import * as d3 from 'd3'

export type TrackId = 'TRACK1' | 'TRACK2' | 'TRACK3' | 'TRACK4' |
  'TRACK5' | 'TRACK6' | 'TRACK7' | 'TRACK8' |
  'TRACK9' | 'TRACK10' | 'TRACK11' | 'TRACK12' |
  'TRACK13' | 'TRACK14' | 'TRACK15' | 'TRACK16'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'TRACK1': Milestone,
  'TRACK2': Milestone,
  'TRACK3': Milestone,
  'TRACK4': Milestone,
  'TRACK5': Milestone,
  'TRACK6': Milestone,
  'TRACK7': Milestone,
  'TRACK8': Milestone,
  'TRACK9': Milestone,
  'TRACK10': Milestone,
  'TRACK11': Milestone,
  'TRACK12': Milestone,
  'TRACK13': Milestone,
  'TRACK14': Milestone,
  'TRACK15': Milestone,
  'TRACK16': Milestone
}

/* Tweaking this constant changes number of milestones for all tracks */
export const milestones = [0, 1, 2, 3, 4, 5]

/* Tweaking the returns here assigns points to milestones */
export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 4
    case 3: return 5
    case 4: return 7
    case 5: return 8
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1',
  '5': '2',
  '10': '3',
  '14': '4',
  '23': '5',
  '29': '6',
  '36': '7',
  '43': '8',
  '50': '9',
  '55': '10',
  '60': '11',
  '65': '12',
  '50': '13',
  '75': '14',
  '135': '15',
}

export const maxLevel = 80

export type Track = {
  displayName: string,
  category: string,
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'TRACK1': Track,
  'TRACK2': Track,
  'TRACK3': Track,
  'TRACK4': Track,
  'TRACK5': Track,
  'TRACK6': Track,
  'TRACK7': Track,
  'TRACK8': Track,
  'TRACK9': Track,
  'TRACK10': Track,
  'TRACK11': Track,
  'TRACK12': Track,
  'TRACK13': Track,
  'TRACK14': Track,
  'TRACK15': Track,
  'TRACK16': Track
|}

export const tracks: Tracks = {
  "TRACK1": {
    "displayName": "Track 1",
    "category": "A",
      "description": "Placeholder for one line description",
      "milestones": [{
          "summary": "Level 1 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 2 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 3 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 4 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 5 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }],
  },

  "TRACK2": {
    "displayName": "Track 2",
    "category": "A",
    "description": "Placeholder for one line description",
    "milestones": [{
      "summary": "Level 1 -- Description",
      "signals": [
        "Something",
      ],
      "examples": [
        "Example",
      ],
    }, {
      "summary": "Level 2 -- Description",
      "signals": [
          "Something",
      ],
      "examples": [
          "Example",
      ],
    }, {
      "summary": "Level 3 -- Description",
      "signals": [
          "Something",
      ],
      "examples": [
          "Example",
      ],
    }, {
      "summary": "Level 4 -- Description",
      "signals": [
          "Something",
      ],
      "examples": [
          "Example",
      ],
    }, {
      "summary": "Level 5 -- Description",
      "signals": [
          "Something",
      ],
      "examples": [
          "Example",
      ],
    }],
  },

  "TRACK 3": {
    "displayName": "Track 3",
    "category": "A",
      "description": "Placeholder for one line description",
      "milestones": [{
          "summary": "Level 1 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 2 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 3 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 4 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 5 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }],
  },

  "TRACK4": {
    "displayName": "Track 4",
    "category": "A",
      "description": "Placeholder for one line description",
      "milestones": [{
          "summary": "Level 1 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 2 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 3 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 4 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 5 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }],
  },

  "TRACK5": {
    "displayName": "Track 5",
    "category": "B",
      "description": "Placeholder for one line description",
      "milestones": [{
          "summary": "Level 1 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 2 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 3 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 4 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 5 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }],
  },

  "TRACK6": {
    "displayName": "Track 6",
    "category": "B",
      "description": "Placeholder for one line description",
      "milestones": [{
          "summary": "Level 1 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 2 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 3 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 4 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 5 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }],
  },

  "TRACK7": {
    "displayName": "Track 7",
    "category": "B",
      "description": "Placeholder for one line description",
      "milestones": [{
          "summary": "Level 1 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 2 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 3 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 4 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 5 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }],
  },

  "TRACK 8": {
    "displayName": "Track 8",
    "category": "B",
      "description": "Placeholder for one line description",
      "milestones": [{
          "summary": "Level 1 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 2 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 3 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 4 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 5 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }],
  },

  "TRACK 9": {
    "displayName": "Track 9",
    "category": "C",
      "description": "Placeholder for one line description",
      "milestones": [{
          "summary": "Level 1 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 2 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 3 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 4 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 5 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }],
  },

  "TRACK10": {
    "displayName": "Track 10",
    "category": "C",
      "description": "Placeholder for one line description",
      "milestones": [{
          "summary": "Level 1 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 2 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 3 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 4 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 5 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }],
  },

  "TRACK11": {
    "displayName": "Track 11",
    "category": "C",
      "description": "Placeholder for one line description",
      "milestones": [{
          "summary": "Level 1 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 2 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 3 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 4 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 5 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }],
  },

  "TRACK12": {
    "displayName": "Track 12",
    "category": "C",
      "description": "Placeholder for one line description",
      "milestones": [{
          "summary": "Level 1 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 2 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 3 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 4 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 5 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }],
  },

  "TRACK13": {
    "displayName": "Track 13",
    "category": "D",
      "description": "Placeholder for one line description",
      "milestones": [{
          "summary": "Level 1 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 2 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 3 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 4 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 5 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }],
  },

  "TRACK14": {
    "displayName": "Track 14",
    "category": "D",
      "description": "Placeholder for one line description",
      "milestones": [{
          "summary": "Level 1 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 2 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 3 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 4 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 5 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }],
  },

  "TRACK15": {
    "displayName": "Track 15",
    "category": "D",
      "description": "Placeholder for one line description",
      "milestones": [{
          "summary": "Level 1 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 2 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 3 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 4 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 5 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }],
  },

  "TRACK16": {
    "displayName": "Track 16",
    "category": "D",
      "description": "Placeholder for one line description",
      "milestones": [{
          "summary": "Level 1 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 2 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 3 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 4 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }, {
          "summary": "Level 5 -- Description",
          "signals": [
              "Something",
          ],
          "examples": [
              "Example",
          ],
      }],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Level 1', minPoints: 0, maxPoints: 5},
  {label: 'Level 2', minPoints: 6, maxPoints: 15},
  {label: 'Level 3', minPoints: 16, maxPoints: 25},
  {label: 'Level 4', minPoints: 26, maxPoints: 35},
  {label: 'Level 5', minPoints: 36, maxPoints: 45},
  {label: 'Level 6', minPoints: 46, maxPoints: 55},
  {label: 'Level 7', minPoints: 56},
  {label: 'Level 8', minPoints: 75}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
