// api/_services/retrieval.js
import { portfolioKnowledge } from '../_data/portfolio.js';
import { logger } from '../_utils/logger.js';

export function retrieveContext(topics) {
    if (!topics || !Array.isArray(topics) || topics.length === 0) {
        // Default context if no specific topics identified
        return portfolioKnowledge["background"] + "\\n" + portfolioKnowledge["portfolio"];
    }

    let context = [];
    const lowerTopics = topics.map(t => t.toLowerCase());

    // Basic topic matching
    if (lowerTopics.some(t => t.includes("tender") || t.includes("match"))) {
        context.push(portfolioKnowledge["tendermatch"]);
    }
    if (lowerTopics.some(t => t.includes("medwaste") || t.includes("medical") || t.includes("waste"))) {
        context.push(portfolioKnowledge["medwaste"]);
    }
    if (lowerTopics.some(t => t.includes("background") || t.includes("tech") || t.includes("skills") || t.includes("who"))) {
        context.push(portfolioKnowledge["background"]);
    }
    if (lowerTopics.some(t => t.includes("hire") || t.includes("work") || t.includes("collaborate") || t.includes("contact"))) {
        context.push(portfolioKnowledge["collaborations"]);
    }
    if (lowerTopics.some(t => t.includes("portfolio") || t.includes("website") || t.includes("build"))) {
        context.push(portfolioKnowledge["portfolio"]);
    }

    // Fallback if no specific match
    if (context.length === 0) {
        context.push(portfolioKnowledge["background"]);
        context.push(portfolioKnowledge["portfolio"]);
    }

    logger.info("Context retrieved", { chunks: context.length });
    return context.join("\\n");
}
