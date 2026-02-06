// T20 DLS Resource Table (optimized for 20-over cricket)
// Format: [Wickets: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 lost]
const dlsResourceTableT20 = {
    20: [100.0, 90.3, 77.1, 62.4, 47.9, 34.9, 24.6, 16.4, 10.1, 5.4, 2.0],
    19: [98.1, 88.6, 75.6, 61.2, 46.9, 34.2, 24.1, 16.1, 9.9, 5.3, 2.0],
    18: [95.9, 86.6, 73.9, 59.8, 45.8, 33.4, 23.5, 15.7, 9.7, 5.2, 1.9],
    17: [93.4, 84.4, 72.0, 58.3, 44.6, 32.5, 22.9, 15.3, 9.4, 5.0, 1.9],
    16: [90.6, 81.9, 69.9, 56.6, 43.3, 31.6, 22.3, 14.9, 9.2, 4.9, 1.8],
    15: [87.5, 79.1, 67.5, 54.7, 41.9, 30.5, 21.5, 14.4, 8.9, 4.7, 1.8],
    14: [84.0, 76.0, 64.9, 52.6, 40.3, 29.4, 20.7, 13.9, 8.5, 4.5, 1.7],
    13: [80.2, 72.5, 62.0, 50.3, 38.5, 28.1, 19.8, 13.3, 8.2, 4.4, 1.6],
    12: [76.0, 68.8, 58.8, 47.7, 36.6, 26.7, 18.8, 12.6, 7.8, 4.2, 1.5],
    11: [71.4, 64.6, 55.3, 44.9, 34.4, 25.1, 17.7, 11.9, 7.3, 3.9, 1.5],
    10: [66.4, 60.1, 51.4, 41.8, 32.0, 23.4, 16.5, 11.1, 6.8, 3.6, 1.4],
    9: [61.0, 55.2, 47.3, 38.4, 29.5, 21.5, 15.2, 10.2, 6.3, 3.4, 1.3],
    8: [55.2, 50.0, 42.8, 34.8, 26.7, 19.5, 13.8, 9.3, 5.7, 3.0, 1.1],
    7: [49.0, 44.4, 38.0, 30.9, 23.7, 17.3, 12.2, 8.2, 5.0, 2.7, 1.0],
    6: [42.4, 38.4, 32.9, 26.8, 20.5, 15.0, 10.6, 7.1, 4.4, 2.3, 0.9],
    5: [35.5, 32.2, 27.6, 22.4, 17.2, 12.5, 8.9, 6.0, 3.7, 2.0, 0.7],
    4: [28.5, 25.8, 22.1, 18.0, 13.8, 10.1, 7.1, 4.8, 2.9, 1.6, 0.6],
    3: [21.3, 19.3, 16.6, 13.5, 10.3, 7.6, 5.3, 3.6, 2.2, 1.2, 0.4],
    2: [14.2, 12.9, 11.0, 9.0, 6.9, 5.0, 3.5, 2.4, 1.5, 0.8, 0.3],
    1: [7.0, 6.4, 5.5, 4.5, 3.4, 2.5, 1.8, 1.2, 0.7, 0.4, 0.1],
    0: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
};

// ODI (50-over) DLS Resource Table - Standard Edition
// Format: [Wickets: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 lost]
const dlsResourceTableODI = {
    50: [100.0, 93.4, 85.1, 74.9, 62.7, 49.5, 36.9, 25.2, 15.2, 7.6, 2.5],
    49: [99.4, 92.9, 84.7, 74.6, 62.5, 49.4, 36.8, 25.2, 15.2, 7.6, 2.5],
    48: [98.8, 92.4, 84.2, 74.2, 62.2, 49.2, 36.7, 25.1, 15.1, 7.5, 2.5],
    47: [98.1, 91.8, 83.7, 73.8, 61.9, 49.0, 36.5, 25.0, 15.0, 7.5, 2.5],
    46: [97.4, 91.2, 83.1, 73.3, 61.5, 48.7, 36.3, 24.8, 14.9, 7.4, 2.4],
    45: [96.7, 90.5, 82.5, 72.8, 61.1, 48.4, 36.1, 24.7, 14.8, 7.4, 2.4],
    44: [96.0, 89.9, 82.0, 72.3, 60.7, 48.1, 35.9, 24.5, 14.7, 7.3, 2.4],
    43: [95.2, 89.2, 81.3, 71.8, 60.2, 47.7, 35.6, 24.3, 14.6, 7.3, 2.4],
    42: [94.4, 88.4, 80.7, 71.2, 59.8, 47.3, 35.3, 24.2, 14.5, 7.2, 2.4],
    41: [93.6, 87.7, 80.0, 70.6, 59.3, 47.0, 35.1, 24.0, 14.4, 7.2, 2.4],
    40: [92.8, 86.9, 79.3, 70.0, 58.8, 46.6, 34.8, 23.8, 14.3, 7.1, 2.3],
    39: [91.9, 86.1, 78.5, 69.3, 58.2, 46.1, 34.4, 23.6, 14.1, 7.0, 2.3],
    38: [91.0, 85.2, 77.8, 68.6, 57.6, 45.7, 34.1, 23.3, 14.0, 7.0, 2.3],
    37: [90.1, 84.4, 77.0, 68.0, 57.1, 45.3, 33.8, 23.1, 13.9, 6.9, 2.3],
    36: [89.1, 83.5, 76.2, 67.3, 56.5, 44.8, 33.5, 22.9, 13.7, 6.8, 2.3],
    35: [88.1, 82.6, 75.4, 66.5, 55.9, 44.3, 33.1, 22.7, 13.6, 6.8, 2.2],
    34: [87.1, 81.6, 74.5, 65.8, 55.3, 43.9, 32.8, 22.4, 13.4, 6.7, 2.2],
    33: [86.0, 80.6, 73.6, 65.0, 54.6, 43.3, 32.4, 22.2, 13.3, 6.6, 2.2],
    32: [84.9, 79.6, 72.7, 64.2, 54.0, 42.8, 32.0, 21.9, 13.1, 6.5, 2.2],
    31: [83.7, 78.5, 71.7, 63.4, 53.3, 42.3, 31.6, 21.6, 13.0, 6.5, 2.1],
    30: [82.5, 77.4, 70.7, 62.5, 52.6, 41.7, 31.2, 21.4, 12.8, 6.4, 2.1],
    29: [81.3, 76.2, 69.6, 61.6, 51.8, 41.1, 30.7, 21.1, 12.6, 6.3, 2.1],
    28: [80.0, 75.0, 68.5, 60.6, 51.0, 40.5, 30.3, 20.7, 12.4, 6.2, 2.0],
    27: [78.7, 73.8, 67.4, 59.6, 50.2, 39.8, 29.8, 20.4, 12.2, 6.1, 2.0],
    26: [77.3, 72.5, 66.2, 58.6, 49.3, 39.2, 29.3, 20.1, 12.0, 6.0, 2.0],
    25: [75.9, 71.2, 65.0, 57.5, 48.4, 38.5, 28.8, 19.7, 11.8, 5.9, 1.9],
    24: [74.4, 69.8, 63.8, 56.4, 47.5, 37.7, 28.2, 19.3, 11.6, 5.8, 1.9],
    23: [72.9, 68.4, 62.5, 55.3, 46.6, 37.0, 27.7, 19.0, 11.4, 5.7, 1.9],
    22: [71.3, 66.9, 61.1, 54.1, 45.6, 36.3, 27.1, 18.6, 11.1, 5.5, 1.8],
    21: [69.7, 65.4, 59.7, 52.9, 44.6, 35.5, 26.6, 18.2, 10.9, 5.4, 1.8],
    20: [68.0, 63.8, 58.3, 51.6, 43.5, 34.6, 25.9, 17.8, 10.6, 5.3, 1.7],
    19: [66.3, 62.2, 56.8, 50.3, 42.4, 33.8, 25.3, 17.3, 10.4, 5.2, 1.7],
    18: [64.5, 60.5, 55.3, 49.0, 41.3, 32.9, 24.6, 16.9, 10.1, 5.0, 1.7],
    17: [62.6, 58.8, 53.7, 47.6, 40.2, 32.0, 24.0, 16.4, 9.8, 4.9, 1.6],
    16: [60.7, 57.0, 52.0, 46.1, 39.0, 31.1, 23.3, 16.0, 9.6, 4.8, 1.6],
    15: [58.8, 55.1, 50.4, 44.6, 37.8, 30.1, 22.6, 15.5, 9.3, 4.6, 1.5],
    14: [56.7, 53.2, 48.6, 43.1, 36.5, 29.1, 21.8, 15.0, 9.0, 4.5, 1.5],
    13: [54.6, 51.2, 46.8, 41.5, 35.2, 28.1, 21.1, 14.5, 8.7, 4.3, 1.4],
    12: [52.4, 49.2, 45.0, 39.9, 33.9, 27.0, 20.3, 13.9, 8.3, 4.2, 1.4],
    11: [50.2, 47.1, 43.1, 38.2, 32.5, 25.9, 19.5, 13.4, 8.0, 4.0, 1.3],
    10: [47.9, 45.0, 41.1, 36.5, 31.0, 24.8, 18.6, 12.8, 7.7, 3.8, 1.3],
    9: [45.5, 42.7, 39.1, 34.7, 29.5, 23.6, 17.7, 12.2, 7.3, 3.6, 1.2],
    8: [43.0, 40.4, 37.0, 32.9, 28.0, 22.4, 16.8, 11.6, 6.9, 3.5, 1.1],
    7: [40.4, 38.0, 34.8, 30.9, 26.4, 21.1, 15.9, 10.9, 6.5, 3.3, 1.1],
    6: [37.8, 35.5, 32.5, 28.9, 24.7, 19.8, 14.9, 10.2, 6.1, 3.1, 1.0],
    5: [35.0, 32.9, 30.2, 26.9, 23.0, 18.4, 13.9, 9.5, 5.7, 2.9, 0.9],
    4: [32.1, 30.2, 27.7, 24.7, 21.2, 17.0, 12.8, 8.8, 5.3, 2.6, 0.9],
    3: [29.1, 27.4, 25.1, 22.4, 19.2, 15.4, 11.6, 8.0, 4.8, 2.4, 0.8],
    2: [25.9, 24.4, 22.4, 20.0, 17.2, 13.8, 10.4, 7.2, 4.3, 2.1, 0.7],
    1: [22.5, 21.2, 19.5, 17.4, 15.0, 12.1, 9.1, 6.3, 3.8, 1.9, 0.6],
    0: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
};

// Convert overs (in X.Y format) to total balls
// Example: 19.3 overs = 19*6 + 3 = 117 balls
function oversToBalls(overs) {
    const completeOvers = Math.floor(overs);
    const balls = Math.round((overs - completeOvers) * 10);
    return completeOvers * 6 + balls;
}

// Convert balls to overs (in X.Y format)
// Example: 117 balls = 19 overs 3 balls = 19.3
function ballsToOvers(balls) {
    const completeOvers = Math.floor(balls / 6);
    const remainingBalls = balls % 6;
    return completeOvers + (remainingBalls / 10);
}

// Validate overs format (decimal part must be 0-5 representing balls)
function validateOversFormat(overs) {
    const completeOvers = Math.floor(overs);
    const balls = Math.round((overs - completeOvers) * 10);
    return balls >= 0 && balls <= 5;
}

// Helper function to get resource percentage based on balls remaining
function getResourcePercentage(ballsRemaining, wicketsInHand, totalOvers = 50) {
    if (wicketsInHand > 10) wicketsInHand = 10;
    if (wicketsInHand < 0) wicketsInHand = 0;
    if (ballsRemaining < 0) ballsRemaining = 0;
    
    // Determine which table to use based on match format
    const isT20 = totalOvers <= 20;
    const dlsResourceTable = isT20 ? dlsResourceTableT20 : dlsResourceTableODI;
    const maxBalls = isT20 ? 120 : 300; // 20 or 50 overs max
    
    if (ballsRemaining > maxBalls) ballsRemaining = maxBalls;
    
    // Convert balls to overs
    const oversRemaining = ballsRemaining / 6;
    const oversFloor = Math.floor(oversRemaining);
    const oversCeil = Math.ceil(oversRemaining);
    
    const wicketsIndex = 10 - wicketsInHand;
    
    // If exact overs
    if (dlsResourceTable[oversFloor]) {
        if (oversFloor === oversCeil) {
            return dlsResourceTable[oversFloor][wicketsIndex];
        }
        
        // Interpolate between overs
        if (dlsResourceTable[oversCeil]) {
            const lowerValue = dlsResourceTable[oversFloor][wicketsIndex];
            const upperValue = dlsResourceTable[oversCeil][wicketsIndex];
            const fraction = oversRemaining - oversFloor;
            return lowerValue + fraction * (upperValue - lowerValue);
        }
    }
    
    return dlsResourceTable[oversFloor] ? dlsResourceTable[oversFloor][wicketsIndex] : 0;
}

// Calculate DLS target
function calculateDLSTarget(team1Score, team1Wickets, totalOvers, team1Overs, team2Overs, 
                            team2ScoreAtInterruption, team2OversBeforeInterruption, team2WicketsAtInterruption) {
    
    // Convert everything to balls for accurate calculation
    const totalBalls = oversToBalls(totalOvers);
    const team1BallsFaced = oversToBalls(team1Overs);
    const team2BallsAvailable = oversToBalls(team2Overs);
    
    // Calculate resources for Team 1
    const team1BallsRemaining = totalBalls - team1BallsFaced;
    const team1WicketsInHand = 10 - team1Wickets;
    const team1ResourcesStart = getResourcePercentage(totalBalls, 10, totalOvers);
    const team1ResourcesEnd = getResourcePercentage(team1BallsRemaining, team1WicketsInHand, totalOvers);
    const team1ResourcesUsed = team1ResourcesStart - team1ResourcesEnd;
    
    // Check if Team 2 had a mid-innings interruption
    const hasInterruption = team2ScoreAtInterruption !== null && 
                           team2ScoreAtInterruption !== undefined && 
                           team2ScoreAtInterruption !== '' &&
                           team2OversBeforeInterruption !== null && 
                           team2OversBeforeInterruption !== undefined && 
                           team2OversBeforeInterruption !== '';
    
    let revisedTarget, parScore, team2ResourcesAvailable, parScoreAtInterruption, runsAhead;
    
    if (hasInterruption) {
        // Mid-innings interruption during Team 2's chase
        const team2ScoreInt = parseFloat(team2ScoreAtInterruption);
        const team2BallsBeforeInt = oversToBalls(parseFloat(team2OversBeforeInterruption));
        const team2WicketsInt = parseInt(team2WicketsAtInterruption) || 0;
        const team2WicketsInHandInt = 10 - team2WicketsInt;
        
        // Resources Team 2 would have with original total overs
        const team2ResourcesOriginal = getResourcePercentage(totalBalls, 10, totalOvers);
        
        // Resources Team 2 has with revised total overs (full amount, not reduced by balls already faced)
        const team2ResourcesRevised = getResourcePercentage(team2BallsAvailable, 10, totalOvers);
        
        // Calculate par score and revised target
        // Target is based on the proportion of resources available
        parScore = (team1Score * team2ResourcesRevised) / team1ResourcesUsed;
        revisedTarget = Math.floor(parScore) + 1;
        
        // Handle negative or very low targets
        if (revisedTarget <= 0) {
            revisedTarget = 1;
        }
        
        team2ResourcesAvailable = team2ResourcesRevised;
        
        // For display: show what they had before and after
        const team2BallsRemainingBefore = totalBalls - team2BallsBeforeInt;
        const team2ResourcesBefore = getResourcePercentage(team2BallsRemainingBefore, team2WicketsInHandInt, totalOvers);
        const team2BallsRemainingAfter = team2BallsAvailable - team2BallsBeforeInt;
        const team2ResourcesAfter = getResourcePercentage(team2BallsRemainingAfter, team2WicketsInHandInt, totalOvers);
        
        // Par score at interruption
        parScoreAtInterruption = team1Score * (team1ResourcesStart - team2ResourcesBefore) / team1ResourcesUsed;
        runsAhead = team2ScoreInt - parScoreAtInterruption;
        const resourcesLost = team2ResourcesOriginal - team2ResourcesRevised;
        
        return {
            revisedTarget: revisedTarget,
            parScore: parScore,
            team1Resources: team1ResourcesUsed,
            team2Resources: team2ResourcesRevised,
            runRate: (team1Score / team1Overs).toFixed(2),
            requiredRunRate: team2BallsRemainingAfter > 0 ? ((revisedTarget - team2ScoreInt) / ballsToOvers(team2BallsRemainingAfter)).toFixed(2) : '0.00',
            hasInterruption: true,
            team2ScoreAtInterruption: team2ScoreInt,
            parScoreAtInterruption: parScoreAtInterruption,
            resourcesBefore: team2ResourcesBefore,
            resourcesAfter: team2ResourcesAfter,
            resourcesLost: resourcesLost,
            runsAhead: runsAhead,
            ballsRemainingAfter: team2BallsRemainingAfter
        };
    } else {
        // Simple case: Team 2 starts fresh
        team2ResourcesAvailable = getResourcePercentage(team2BallsAvailable, 10, totalOvers);
        
        parScore = (team1Score * team2ResourcesAvailable) / team1ResourcesUsed;
        revisedTarget = Math.floor(parScore) + 1;
        
        return {
            revisedTarget: revisedTarget,
            parScore: parScore,
            team1Resources: team1ResourcesUsed,
            team2Resources: team2ResourcesAvailable,
            runRate: (team1Score / team1Overs).toFixed(2),
            requiredRunRate: (revisedTarget / team2Overs).toFixed(2),
            hasInterruption: false
        };
    }
}

// Validate inputs
function validateInputs(team1Score, team1Wickets, totalOvers, team1Overs, team2Overs, 
                       team2ScoreAtInterruption, team2OversBeforeInterruption, team2WicketsAtInterruption) {
    const errors = [];
    
    if (isNaN(team1Score) || team1Score < 0 || team1Score > 999) {
        errors.push("Team 1 score must be between 0 and 999");
    }
    
    if (isNaN(team1Wickets) || team1Wickets < 0 || team1Wickets > 10) {
        errors.push("Team 1 wickets must be between 0 and 10");
    }
    
    if (isNaN(totalOvers) || totalOvers <= 0 || totalOvers > 50) {
        errors.push("Total overs must be between 1 and 50");
    }
    
    if (!validateOversFormat(totalOvers)) {
        errors.push("Invalid overs format for total overs. Decimal part must be 0-5 (representing balls)");
    }
    
    if (isNaN(team1Overs) || team1Overs < 0 || team1Overs > totalOvers) {
        errors.push("Team 1 overs must be valid and not exceed total overs");
    }
    
    if (!validateOversFormat(team1Overs)) {
        errors.push("Invalid overs format for Team 1. Example: 19.3 means 19 overs and 3 balls, not 19.6");
    }
    
    if (isNaN(team2Overs) || team2Overs <= 0 || team2Overs > totalOvers) {
        errors.push("Team 2 overs must be between 1 and total overs");
    }
    
    if (!validateOversFormat(team2Overs)) {
        errors.push("Invalid overs format for Team 2. Example: 15.0 means 15 complete overs");
    }
    
    // Validate interruption fields if provided
    if (team2ScoreAtInterruption !== '' && team2ScoreAtInterruption !== null && team2ScoreAtInterruption !== undefined) {
        const score = parseFloat(team2ScoreAtInterruption);
        if (isNaN(score) || score < 0 || score > 999) {
            errors.push("Team 2 score at interruption must be between 0 and 999");
        }
        
        if (team2OversBeforeInterruption === '' || team2OversBeforeInterruption === null || team2OversBeforeInterruption === undefined) {
            errors.push("Team 2 overs before interruption is required when score is provided");
        } else {
            const overs = parseFloat(team2OversBeforeInterruption);
            if (isNaN(overs) || overs < 0 || overs >= team2Overs) {
                errors.push("Team 2 overs before interruption must be less than overs available");
            }
            if (!validateOversFormat(overs)) {
                errors.push("Invalid overs format for interruption. Example: 0.3 means 0 overs and 3 balls");
            }
        }
        
        if (team2WicketsAtInterruption !== '' && team2WicketsAtInterruption !== null && team2WicketsAtInterruption !== undefined) {
            const wickets = parseInt(team2WicketsAtInterruption);
            if (isNaN(wickets) || wickets < 0 || wickets > 10) {
                errors.push("Team 2 wickets at interruption must be between 0 and 10");
            }
        }
    }
    
    return errors;
}

// Display results
function displayResults(result) {
    const resultsDiv = document.getElementById('results');
    
    let additionalDetails = '';
    if (result.hasInterruption) {
        const aheadBehind = result.runsAhead >= 0 ? 
            `${result.runsAhead.toFixed(1)} runs ahead` : 
            `${Math.abs(result.runsAhead).toFixed(1)} runs behind`;
        
        let targetMessage = `Team 2 needs ${result.revisedTarget} runs to win`;
        if (result.revisedTarget <= result.team2ScoreAtInterruption) {
            targetMessage = `Team 2 has already won (scored ${result.team2ScoreAtInterruption}, target was ${result.revisedTarget})`;
        }
        
        additionalDetails = `
            <div class="detail-row">
                <span class="detail-label">Team 2 Score at Interruption</span>
                <span class="detail-value">${result.team2ScoreAtInterruption}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Par Score at Interruption</span>
                <span class="detail-value">${result.parScoreAtInterruption.toFixed(1)}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Status at Interruption</span>
                <span class="detail-value">${aheadBehind}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Resources Before Interruption</span>
                <span class="detail-value">${result.resourcesBefore.toFixed(1)}%</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Resources After Interruption</span>
                <span class="detail-value">${result.resourcesAfter.toFixed(1)}%</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Resources Lost</span>
                <span class="detail-value">${result.resourcesLost.toFixed(1)}%</span>
            </div>
        `;
    }
    
    resultsDiv.innerHTML = `
        <div class="result-content">
            <div class="result-header">
                <h3>Revised Target</h3>
                <div class="revised-target">${result.revisedTarget}</div>
                <p>${result.hasInterruption && result.revisedTarget <= result.team2ScoreAtInterruption ? 
                    `Team 2 has won (scored ${result.team2ScoreAtInterruption}, needed ${result.revisedTarget})` :
                    `Team 2 needs ${result.revisedTarget} runs to win`}</p>
            </div>
            
            <div class="result-details">
                <div class="detail-row">
                    <span class="detail-label">Par Score</span>
                    <span class="detail-value">${result.parScore.toFixed(2)}</span>
                </div>
                ${additionalDetails}
                <div class="detail-row">
                    <span class="detail-label">Team 1 Resources Used</span>
                    <span class="detail-value">${result.team1Resources.toFixed(2)}%</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Team 2 Resources Available</span>
                    <span class="detail-value">${result.team2Resources.toFixed(2)}%</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Team 1 Run Rate</span>
                    <span class="detail-value">${result.runRate}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Required Run Rate</span>
                    <span class="detail-value">${result.requiredRunRate}</span>
                </div>
            </div>
            
            <div class="result-note">
                <strong>Note:</strong> ${result.hasInterruption ? 
                    'This calculation accounts for the mid-innings interruption. The target is adjusted based on resources available after interruption, while preserving the competitive position at the time of interruption.' : 
                    'This calculation uses the standard DLS method. The revised target is rounded down plus one run to win, as per cricket rules.'}
            </div>
        </div>
    `;
}

// Display error
function displayError(errors) {
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = `
        <div class="result-content">
            <div style="background: #f8d7da; border-left: 4px solid #dc3545; padding: 1rem; border-radius: 4px; color: #721c24;">
                <strong>Please correct the following:</strong>
                <ul style="margin: 0.5rem 0 0 1.5rem;">
                    ${errors.map(error => `<li>${error}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

// Main calculation function
function performCalculation() {
    const team1Score = parseFloat(document.getElementById('team1Score').value);
    const team1Wickets = parseInt(document.getElementById('team1Wickets').value);
    const totalOvers = parseFloat(document.getElementById('totalOvers').value);
    const team1Overs = parseFloat(document.getElementById('team1Overs').value);
    const team2Overs = parseFloat(document.getElementById('team2Overs').value);
    const team2ScoreAtInterruption = document.getElementById('team2ScoreAtInterruption').value;
    const team2OversBeforeInterruption = document.getElementById('team2OversBeforeInterruption').value;
    const team2WicketsAtInterruption = document.getElementById('team2WicketsAtInterruption').value;
    
    const errors = validateInputs(team1Score, team1Wickets, totalOvers, team1Overs, team2Overs,
                                  team2ScoreAtInterruption, team2OversBeforeInterruption, team2WicketsAtInterruption);
    
    if (errors.length > 0) {
        displayError(errors);
        return;
    }
    
    const result = calculateDLSTarget(team1Score, team1Wickets, totalOvers, team1Overs, team2Overs,
                                     team2ScoreAtInterruption, team2OversBeforeInterruption, team2WicketsAtInterruption);
    displayResults(result);
}

// Reset form
function resetForm() {
    document.getElementById('team1Score').value = '';
    document.getElementById('team1Wickets').value = '';
    document.getElementById('totalOvers').value = '50';
    document.getElementById('team1Overs').value = '';
    document.getElementById('team2Overs').value = '';
    document.getElementById('team2ScoreAtInterruption').value = '';
    document.getElementById('team2OversBeforeInterruption').value = '';
    document.getElementById('team2WicketsAtInterruption').value = '';
    
    document.getElementById('results').innerHTML = `
        <div class="result-placeholder">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
            </svg>
            <p>Enter match parameters and click Calculate Target</p>
        </div>
    `;
}

// Load scenario
function loadScenario(scenarioNum) {
    switch(scenarioNum) {
        case 1:
            document.getElementById('team1Score').value = '125';
            document.getElementById('team1Wickets').value = '3';
            document.getElementById('totalOvers').value = '50';
            document.getElementById('team1Overs').value = '25';
            document.getElementById('team2Overs').value = '40';
            document.getElementById('team2ScoreAtInterruption').value = '';
            document.getElementById('team2OversBeforeInterruption').value = '';
            document.getElementById('team2WicketsAtInterruption').value = '';
            break;
        case 2:
            document.getElementById('team1Score').value = '200';
            document.getElementById('team1Wickets').value = '8';
            document.getElementById('totalOvers').value = '40';
            document.getElementById('team1Overs').value = '40';
            document.getElementById('team2Overs').value = '40';
            document.getElementById('team2ScoreAtInterruption').value = '';
            document.getElementById('team2OversBeforeInterruption').value = '';
            document.getElementById('team2WicketsAtInterruption').value = '';
            break;
        case 3:
            document.getElementById('team1Score').value = '280';
            document.getElementById('team1Wickets').value = '6';
            document.getElementById('totalOvers').value = '50';
            document.getElementById('team1Overs').value = '50';
            document.getElementById('team2Overs').value = '35';
            document.getElementById('team2ScoreAtInterruption').value = '';
            document.getElementById('team2OversBeforeInterruption').value = '';
            document.getElementById('team2WicketsAtInterruption').value = '';
            break;
        case 4:
            // IPL 2023 Final - GT vs CSK
            document.getElementById('team1Score').value = '214';
            document.getElementById('team1Wickets').value = '4';
            document.getElementById('totalOvers').value = '20';
            document.getElementById('team1Overs').value = '20';
            document.getElementById('team2Overs').value = '15';
            document.getElementById('team2ScoreAtInterruption').value = '4';
            document.getElementById('team2OversBeforeInterruption').value = '0.3';
            document.getElementById('team2WicketsAtInterruption').value = '0';
            break;
    }
    
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
}

// Validate overs input in real-time
function validateOversInput(input) {
    const value = parseFloat(input.value);
    if (!isNaN(value)) {
        const completeOvers = Math.floor(value);
        const balls = Math.round((value - completeOvers) * 10);
        
        // If balls > 5, correct it
        if (balls > 5) {
            input.value = completeOvers + 0.5;
            alert('Invalid overs format! Decimal part represents balls (0-5). Example: 19.3 means 19 overs and 3 balls.');
        }
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateBtn').addEventListener('click', performCalculation);
    document.getElementById('resetBtn').addEventListener('click', resetForm);
    
    document.querySelectorAll('.scenario-card').forEach(card => {
        card.addEventListener('click', function() {
            const scenario = parseInt(this.getAttribute('data-scenario'));
            loadScenario(scenario);
        });
    });
    
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performCalculation();
            }
        });
    });
    
    // Enforce input constraints
    const enforceConstraints = (input) => {
        input.addEventListener('input', function() {
            let value = parseFloat(this.value);
            const min = parseFloat(this.min);
            const max = parseFloat(this.max);
            
            if (!isNaN(min) && value < min) {
                this.value = min;
            }
            if (!isNaN(max) && value > max) {
                this.value = max;
            }
            if (value < 0) {
                this.value = 0;
            }
        });
        
        input.addEventListener('keydown', function(e) {
            if (e.key === '-' || e.key === 'e' || e.key === 'E' || e.key === '+') {
                e.preventDefault();
            }
        });
        
        // Validate overs format on blur
        if (input.id.includes('Overs')) {
            input.addEventListener('blur', function() {
                validateOversInput(this);
            });
        }
    };
    
    document.querySelectorAll('input[type="number"]').forEach(enforceConstraints);
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
