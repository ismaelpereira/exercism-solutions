//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim();
  let talking = isTalking(message);
  let question = isQuestion(message);
  if (!talking && question) {
    return "Calm down, I know what I'm doing!";
  }
  if (question) {
    return "Sure.";
  }
  if (!talking) {
    return "Whoa, chill out!";
  }
  if (message.replace(/\n \t \r/, "") === "") {
    return "Fine. Be that way!";
  }
  return "Whatever.";
};

function isTalking(str) {
  let result = true;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 47 && str.charCodeAt(i) < 57) {
      continue;
    }
    if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      return true;
    }
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      result = false;
    }
  }
  return result;
}

function isQuestion(str) {
  return str[str.length - 1] === "?";
}
/**
 * Gritar e perguntar = tudo maiuscolo e ? final => 'Calm down, I know what I'm doing!'
 *
 * Pergunta = ? Final => 'Sure.'
 *
 * Gritando = Tudo maiúsculo => 'Whoa, chill out!'
 *
 * Não falar nada = string vazia (ignorar espaços) => 'Fine. Be that way!'
 *
 * Qualquer outra coisa => 'Whatever.'
 *
 */
