/*  Mention Counter 
একটি Community App-এ Post Caption-এ কিগুরিা "@mention" আরে এবং সবরচরয বড mention দকানিা িা দবর 
কররি হরব। প্রতিটি mention হরিা @ তেরয শুরু হওযা একটি word। 
Input 
একটি string, caption, দ মনঃ 
"Great session today @rafi @sadia @karim" 
Output 
একটি Object, দিপ: { mentionCount: Number, longestMention: String } 
Challenge 
● longestMention → সবরচরয বড mention-এর দিক্সি, @ োডা (length সমান হরি দ িা আরগ আরে দসিা) 
● দকারনা mention না োকরি longestMention হরব "" 
Starter Code 
function countMentions(caption) { 
// Write your code here 
} 
Sample Test Cases 
Input 
Output 
"Great session today @rafi @sadia @karim" 
"No mentions here" 
{ mentionCount: 3, longestMention: "sadia" } 
{ mentionCount: 0, longestMention: "" }  */

const countMentions = (caption) => {
  // split first
  let splited = caption.split(" ");

  let longestMention = "";
  const countingMention = splited.filter((currentMention) => {
    if (currentMention.startsWith("@")) {
      return true;
    } else {
      return false;
    }
  });
  const longestMentionWord = countingMention.map((currentMentionWord) => {
    if (currentMentionWord.length > longestMention.length) {
      longestMention = currentMentionWord;
    }
  });
  return {
    mentionCount: countingMention.length,
    longestMention: longestMention,
  };
};
console.log(countMentions("Great session today @rafi @sadia @karim"));
