// Система достижений
const achievements = {
    htmlMaster: {
        name: "🏝️ Мастер HTML",
        description: "Выполни все задания на HTML Острове",
        earned: false
    },
    firstProject: {
        name: "🚀 Первый проект",
        description: "Создай свою первую веб-страницу",
        earned: false
    }
};

function unlockAchievement(achievementId) {
    if (achievements[achievementId] && !achievements[achievementId].earned) {
        achievements[achievementId].earned = true;
        showAchievementPopup(achievements[achievementId]);
    }
}

function showAchievementPopup(achievement) {
    // Здесь будет красивый popup
    console.log('🎉 Получено достижение:', achievement.name);
    alert('🎉 ' + achievement.name + '\n' + achievement.description);
}
