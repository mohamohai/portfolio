const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");
const sequelize = require("./models").sequelize;
const bodyParser = require("body-parser");
sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
const {
  User,
  Sequelize: { Op },
} = require("./models");
sequelize.query("SET NAMES utf8;");

const {
  //쓰는 테이블만큼 오기 s 자동으로 붙여버리니까 조심
  Schedule,
  Sequelize: { Dp },
} = require("./models");
sequelize.query("SET NAMES utf8;");
var urla = "https://www.naver.com/";

app.post("/modify/data", (req, res) => {
  // 안씀 기본 보류
  User.update(
    { name: req.body.modify.name },
    {
      where: { id: req.body.modify.id },
    }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw err;
    });
});

app.get("/get/Schedule", (req, res) => {
  ///안씀 기본 보류
  Schedule.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw err;
    });
});
app.get("/get/data", (req, res) => {
  User.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw err;
    });
});

app.post("/delete/Schedule", (req, res) => {
  //안씀 기본 보류
  //안씀 기본 보류
  Schedule.destroy({
    where: { id: req.body.delete.id },
  })
    .then(res.sendStatus(200))
    .catch((err) => {
      throw err;
    });
});

////////////////////////////////////////////////////
app.post("/add/Schedule", (req, res) => {
  // 씀 데이터 추가 기본형

  Schedule.create({
    account: req.body.account,
    title: req.body.title,
    content: req.body.content,
    location: req.body.location,
    time: req.body.time,
    etc: req.body.etc,
    clock: req.body.clock,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

app.get("/get/ScheduleId", (req, res) => {
  //씀 아이디를 이용하여 데이터 검색

  const { userId } = req.query;
  Schedule.findAll({
    where: {
      account: userId,
    },
    order: [["time", "ASC"]],
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw err;
    });
});
app.post("/delete/ScheduleSelect", (req, res) => {
  //씀 모달에서 데이터 삭제
  //사용
  Schedule.destroy({
    where: {
      account: req.body.delete.userId,
      title: req.body.delete.Title,
      time: req.body.delete.Date,
    },
  })
    .then(res.sendStatus(200))
    .catch((err) => {
      throw err;
    });
});

app.post("/add/data", (req, res) => {
  // 회원추가
  User.create({
    account: req.body.account,
    password: req.body.password,
    name: req.body.name,
    image: req.body.image,
    birthday: req.body.birthday,
    gender: req.body.gender,
    job: req.body.job,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

app.post("/set/Schedule", (req, res) => {
  console.log(req.body.account);
  // 안씀 기본 보류
  Schedule.update(
    {
      account: req.body.account,
      title: req.body.title,
      content: req.body.content,
      location: req.body.location,
      time: req.body.time,
      etc: req.body.etc,
      clock: req.body.clock,
    },
    {
      where: { account: req.body.account, id: req.body.id },
    }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw err;
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On : ashttp://localhost:${PORT}/`);
});
