var mongoose = require("mongoose");

require("../mongodb_helper");
var Comment = require("../../models/comment");

describe("Comment model", () => {
    beforeEach((done) => {
      mongoose.connection.collections.comments.drop(() => {
        done();
      });
    });

it("has a comment", () => {
    var comment = new Comment ({ message: "some message", content: "test comment"});
        expect(comment.content).toEqual("test comment");
  });

  it("can list all comments", (done) => {
      Comment.find((err, content) => {
          expect(err).toBeNull();
          expect(content).toEqual([]);
          done();
      });
  });

it("can save a comment", (done) => {
    var comment = new Comment({ content: "test comment" });
    comment.save((err) => {
      expect(err).toBeNull(); 
      Comment.find((err, comment) => {
        expect(err).toBeNull(); 
        expect(comment[0].content).toEqual('test comment');
        done();
      });
    });
  });
});
