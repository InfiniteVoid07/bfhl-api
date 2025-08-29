import express from 'express';
const app = express();
app.use(express.json());

app.get('/bfhl', (req, res) => {
  res.status(200).send("This endpoint is designed to accept POST requests only. Please use a tool like cURL or Postman to send a POST request with the required JSON data.");
});

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data || [];

    const user_id = "harshit_chaudhary_01072003";
    const email = "harshit.chaudhary2022@vitstudent.ac.in";
    const roll_number = "22BRS1277";

    const even_numbers = [];
    const odd_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;
    let alphaConcat = "";

    data.forEach((item) => {
      if (/^-?\d+$/.test(item)) {
        const num = parseInt(item, 10);
        sum += num;
        if (num % 2 === 0) even_numbers.push(item);
        else odd_numbers.push(item);
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        alphaConcat += item;
      } else {
        special_characters.push(item);
      }
    });

    let concat_string = "";
    let toggle = true;
    for (let i = alphaConcat.length - 1; i >= 0; i--) {
      concat_string += toggle
        ? alphaConcat[i].toUpperCase()
        : alphaConcat[i].toLowerCase();
      toggle = !toggle;
    }

    res.status(200).json({
      is_success: true,
      user_id,
      email,
      roll_number,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string,
    });
  } catch (e) {
    res.status(500).json({ is_success: false, error: e.message });
  }
});

export default app;
