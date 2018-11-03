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
        "displayName": "Simple Interface Implementation",
        "category": "Learnability with Reference Tests",
        "description": "From having nothing visual to having something visual. Two scenarios: create application shell & create a view. A work in the frame of half a day. Start with a reference specification and compare Vaadin to Angular baseline numbers. How far the user gets with a timebox. This should be evaluated after changes to relevant functionality.",
        "milestones": [{
            "summary": "Functionally complete for the reference implementation",
            "signals": [
                "Got some implemented, timebox out",
            ],
            "examples": [
                "Example",
            ],
        }, {
            "summary": "Level 2 -- Description",
            "signals": [
                "Got it implemented in the timebox",
            ],
            "examples": [
                "Example",
            ],
        }, {
            "summary": "On par with reference implementation",
            "signals": [
                "Fits into timebox",
                "Looks as specified",
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
            "summary": "Better than reference for the reference implementation",
            "signals": [
                "Visually looks the same",
                "Made faster",
                "Readable code",
                "Wants to continue working on the framework",
            ],
            "examples": [
                "Measure time used on implementation",
                "Measure functional items of code"
            ],
        }],
    },

    "TRACK2": {
        "displayName": "Debugging",
        "category": "Learnability with Reference Tests",
        "description": "How developers experience the problem pinpointing / debugging experience in their current development environment in both Java and JavaScript side. Do first a reference implementation of this, and later follow how users experience real problems.",
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

    "TRACK3": {
        "displayName": "Getting Started Experience",
        "category": "Learnability with Reference Tests",
        "description": "",
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
                "Time to identifying the problem",
                "Feeling of achievement in solving the problem"
            ],
            "examples": [
                "Example",
            ],
        }],
    },

    "TRACK 4": {
        "displayName": "SUS Followup Reference Tests",
        "category": "After Use Experience Measurement",
        "description": "Asking every test subject after they've used the system to get SUS score with same set of questions. Average of scores + last score.",
        "milestones": [{
            "summary": "Score 0 - 25",
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
            "summary": "Score 61-80",
            "signals": [
                "Something",
            ],
            "examples": [
                "Example",
            ],
        }, {
            "summary": "Score 81 - 100",
            "signals": [
                "Something",
            ],
            "examples": [
                "Example",
            ],
        }],
    },

    "TRACK5": {
        "displayName": "SUS Followup Customer Piloting",
        "category": "After Use Experience Measurement",
        "description": "After customer pilot experience, we ask them to fill in SUS 10 questions and follow average and latest results.",
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
        "displayName": "Net Promoter Score",
        "category": "After Use Experience Measurement",
        "description": "Following NPS as many reports say it already is as good a measurement as SUS and may reveal a strong dimension of how strongly people feel.",
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
        "displayName": "Migration Experience",
        "category": "Core Experiences",
        "description": "Experience moving from being a user of old platform into the new platform, experience of learnability.",
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
        "displayName": "Maintenance Self-Reliance",
        "category": "Core Experiences",
        "description": "When something does not work, developers need to figure out if it is my code vs. framework code. How easy this is with the new framework.",
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
        "displayName": "Production Release Experience",
        "category": "Core Experiences",
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
        "displayName": "Automated Tests in Framework Projects",
        "category": "Core Experiences",
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
        "displayName": "Getting and Setting Data",
        "category": "Core Experiences",
        "description": "Using own data sources and presenting them visually.",
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
        "displayName": "Getting Started Experience",
        "category": "Core Experiences",
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
        "category": "Core Experiences",
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
        "displayName": "Full-Stack Dev Experience",
        "category": "User Group",
        "description": "How well the standards, idoms and toolchains fit together with the framework.",
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
        "displayName": "Back-End Dev Experience",
        "category": "User Group",
        "description": "How well the standards, idioms and toolchains fit together with the framework.",
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
        "displayName": "Front-End Dev Experience",
        "category": "User Group",
        "description": "How well the standards, idioms and toolchains fit together with the framework.",
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
