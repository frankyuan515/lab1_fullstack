const express = require("express")
const Post = require("./models/Post") // new
const router = express.Router()


// Get all posts
router.get("/posts", async(req, res) => {
    const posts = await Post.find()
    res.send(posts)


})


/*
router.get('/posts', (req, res) => {
    const dataMongo = new Post({
        fullName: req.body.fullName,
        mailAddress: req.body.mailAddress,
        phoneNumber: req.body.phoneNumber,
    })
    Post.find({}, function() {
        res.render('views/index', {
            mongoList: dataMongo
        })

    })
})
*/




router.post("/posts", async(req, res) => {
    try {
        const post = new Post({
            fullName: req.body.fullName,
            mailAddress: req.body.mailAddress,
            phoneNumber: req.body.phoneNumber,
        })
        await post.save()
        res.send(post)


        console.log("Record inserted Successfully"); //14.34 
    } catch {

        res.status(409)
        res.send({ error: "Your added item already exist!" })
    }

})

router.get("/posts/:id", async(req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })
        res.send(post)
    } catch {

        res.status(404)
        res.send({ error: "Your searched id doesn't exist!" })
    }
})

router.patch("/posts/:id", async(req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })

        if (req.body.fullName) {
            post.fullName = req.body.fullName
        }

        if (req.body.mailAddress) {
            post.mailAddress = req.body.mailAddress
        }

        if (req.body.phoneNumber) {
            post.phoneNumber = req.body.phoneNumber
        }

        await post.save()
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Your updated item doesn't exist!" })
    }
})

router.delete("/posts/:id", async(req, res) => {
    try {
        await Post.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Your deleted item doesn't exist!" })
    }
})




module.exports = router