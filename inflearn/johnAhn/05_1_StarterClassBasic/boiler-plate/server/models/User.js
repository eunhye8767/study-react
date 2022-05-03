const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

// 유저 정보 템플릿
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email : {
        type: String,
        trim: true,
        unique: 1,
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function(next) {
    var user = this;

    // user에서 password 정보가 변경되었을 때
    if(user.isModified('password')) {
        // 비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err);
    
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err);
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }

})

userSchema.methods.comparePassword = function(plainPassword, cb) {

    // plainPassword 비밀번호를 암호화 하여
    // 현재 데이터베이스에 저장된 this.password 비밀번호화 비교
    bcrypt.compare(plainPassword, this.password, function(err, isMath) {
        // 비교했을 때 다르면 err, 
        if(err) return cb(err);
        // 같으면 err는 null, isMatch === true 
        cb(null, isMath)
    });
};

// generateToken()메서드 경우 콜백함수가 적용했기 때문에 cb 하나만 써준다. 
// index.js에서 generateToken() 참고
userSchema.methods.generateToken = function(cb) {
    var user = this;

    // jsonwebtoken을 이용해서 token을 생성하기
    var token = jwt.sign(user._id.toHexString(), 'secreatToken');

    user.token = token;
    user.save(function(err, user){
        if(err) return cb(er);
        cb(null, user);
    })
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;

    // 토큰을 decode 한다.
    //   decode할 때에는 verify()를 사용한다.
    //   user._id + 'secreatToken' = token
    //   decoded == user._id
    jwt.verify(token, 'secreatToken', function(err, decoded) {
        // 유저 아이디를 이용해서 유저를 찾은 다음에
        // 클라이언트에서 가져온 token과 DB에 보관된 token이 일치하는 지 확인
        // findOne == 몽고DB 메서드. 어떤 것을 찾을 건지?
        user.findOne({ "_id" : decoded, "token" : token}, function(err, user) {
            if(err) return cb(err);
            cb(null, user);
        })
    })
};

const User = mongoose.model('User', userSchema);

module.exports = { User };