Transcript from Apr 9, 2025

[00:00:00]
 Good evening class. Welcome to Codex Academy level 4 week 5 day 3 and the theme of this week is Redux.
 Today's agenda in the first hour will take attendance, do announcements, review what we learned yesterday. And there should be time to start some new Redux topics.
 Second hour, continue with more Redux topics.
 And then in the third hour, we'll do many evaluations. whether it's for week five or week four,
 or maybe if you were approved to do many evaluations
[00:00:50]
 from previous weeks,
 you also have time to work on the upcoming assignment.
 Now, take your attendance,
 make sure you head on over to your Codex account, and mark
 yourself as present.
[00:01:13]
 And now it's time for announcements.
 Let me get that loaded up for you. Okay, so for the announcements.
 Okay, so if you haven't already submitted your mini evaluation week five.
 It was due on Tuesday.
 It will close on Tuesday of next week.
[00:01:49]
 And let's see here.
 So many evaluations like corrections for week four.
 That closed on Tuesday before class.
 So if you want to submit corrections for week four, you should have submitted it,
 submitted, and made a submission for week four.
[00:02:21]
 And then I'll call your names.
 You can volunteer and if you volunteer,
 then you can choose which one you want to do.
 Week four or week five.
 Otherwise, I'm just going to call.
[00:02:36]
 I'm going to prioritize week five first for many evaluations.
 And then if there's nothing to choose from there, I'll call on week 4 corrections.
 Okay, so assignments. So your assignments are in the process of being graded. And you will be given an extension to submit corrections.
 Let's see here.
 Okay, so.
[00:03:16]
 Capstone proxy closes for corrections on Thursday.
 Capstone back in the counts. is due this Thursday before class.
 Back in the counts is posted here.
 Capstone back in the counts is right here under week 4 because that's when they were
 first introduced.
[00:03:39]
 Capstone back in the counts. And it includes the description that you've been seeing in class, but it also includes more details. So as long as you were working on this and you should be well along your way.
 But there if you need more of a guide, here are the details.
 So submitting it on time is three points.
 So make sure you submitted on time so that you can get these three points.
 Your project should render without errors. This should be easier now.
[00:04:36]
 Now that you know how to use environment variables and you can even deploy the back end server to
 Lambda to be easier to render without errors.
 And, oh, I should, I should, I should, I should fix this thing here. Not the, I need the GitHub repository link and the lambda, the lambda link so I can try the, so I's see here.
 So I move this one.
 This one was number eight on the list.
[00:06:01]
 So if you remember here, what happens to it?
 Oh, here.
 So number eight, where did you go here?
 Number eight on this list, create a branch for coding a function that returns a DynamoDB client. I put it higher up in this description because it's
 useful if you start if you code it first and start using it. So basically this
[00:06:39]
 function that returns a DynamoDB client. You should not accept any parameters.
 It should use environment variables to create a DynamoDB client.
 This is all in the backend and I thought you had to use environment variables to hide your secret access keys. Not just in the back end. I mean, not just locally, but I showed
 you how to do it for lambda. Return a Dynamo DB client. So that's what the function return type.
 So in a function signature, in the function signature, you know, when you define a function,
[00:07:34]
 you use the keyword function and in the function's name, and then the parameters,
 where you can assert the return type right there, right after the parentheses. So assert the function return type.
 Probably create a user branch for defining a custom data type for user accounts.
 So your user accounts in DynamoDB, they have, it's a table.
 And the accounts, they should have a, you know, should be asking for an email and a password.
[00:08:16]
 And then, you know, you might ask also for a name and phone number or address or what's
 their favorite color, whatever you want,
 whatever you want to include for user accounts,
 create a data type for it, a custom data type.
 So define a custom data type for user accounts
[00:08:43]
 So define a custom data type for user accounts.
 And use this data type in the branches below.
 Okay, so this one should be a pretty easy branch to do.
 So basically you would.
 So you're going to define a data type.
[00:09:05]
 I would use the type keyword.
 And what I call it, I would call it maybe user account with a capital U.
 And basically the user account would look like an object that has an email which is a string. It has a password
 which is a string. It has a name which is a string and it has a phone number which is a number
 or it has a phone which is a number.
[00:09:52]
 Next, we'll create a branch for using TDD to test the function that creates accounts. So that branch for that function might be called create account.
 And we can call the branch create account.
 So the functions should create an account in DynamoDB and return a result based on the response from DynamoDB. So when you create an account in DynamoDB, DynamoDB
 will return a response. So this function that you create here, this function,
 will also return result based on the DynamoDB response. So you can return the DynamoDB response as is,
[00:10:50]
 or you can modify it,
 so you just include the information that you really need.
 I usually just modify it because you don't need all the information there.
 So no, no, there's no need to confuse yourself with too much information.
 DMI, just return the information that you really need.
[00:11:20]
 And remember you're designing this.
 When you're designing it while doing TDD,
 you can sort of decide what you want this to return.
 You could return, you could set it up
 to return a Boolean like true or false.
[00:11:40]
 Did you, did it create the cat successfully or did it not?
 Or maybe you just want to send the response from DynamoDB.
 You never, it's up to you basically.
 And then you should have at least five tests.
 The function according to test bestifications, assert the function return type there it is again the function return type.
[00:12:13]
 But at the top next to the function signature.
 What is it going to return as it going to return a Boolean is it going to return an object, is it going to return a string, it's up to you,
 you decide, whatever makes sense. Then assert the data type of the function
 parameters as a custom data type. So this function creates accounts, right? So what kind of information would this function receive?
 Basically you would
[00:12:49]
 You should receive a email and a password. That's the bare minimum
 You need an email and a password
 Maybe you'll also receive the name and phone number or our age, their address, whatever you,
 whatever you want. So just insert that data type.
 You have to function. The function will take in a parameter.
[00:13:19]
 So insert the data type of that parameter. Then you'll create a branch for adding a path and route handler
 for the account creation function. So the route might be like slash create.
 The message is an example. You do whatever makes sense. So the route or the path, that would be the path.
 If this is the path, then your route handler should also be called create and your file
 name to the create.ts.
[00:13:57]
 They should match.
 That's the naming convention.
 Just let them all match.
 Then the route handler should send a response.
 The route, your route handler.
[00:14:14]
 Basically it might be called create.
 It will send a response.
 And what will that response be?
 It will be the results from the calculation
 function above. So your calculation is going to return a result and then your
[00:14:33]
 route handler is going to send that as a response.
 Also your route handler will be receiving information.
 Your route handler will receive, like, it needs to receive at least an email in a password.
 It can receive it by the query parameters.
 So when your route handler receives query parameters,
[00:15:15]
 assert the incoming data.
 So that's an example, for example, that's the query.
 Assert that query object. So what do you expect it to have?
 So, you expect it to have at least an email and password,
 so you should assert that query object
[00:15:33]
 with a custom data type.
 So, you need to know how to get queries
 before you can even assert the data type.
 And you need to know how to make your custom data type.
 Basically that's why this is the first one here.
[00:15:56]
 One of the first ones, the finite custom data type. The other one is, you know, TDD for a function that retrieves accounts.
 I was walking through this, having a retrieve an account.
 I could probably do that today, finish walking through it, so you did a better idea. And maybe that's what I'll do. Yeah, I think I'll just finish that
 walking for one of those practices and see what that practice was. re-read practice. I'll finish the walk through for that.
 So again, do similar things for basically I'll walk you through this part,
[00:16:55]
 like T&D, that retrieves accounts. And a path and route handler for account retrieval.
 There's TDD for function that updates accounts.
 And a path and route handler.
 Oops, I forgot to.
 This is for account update function. It takes this to the account update function.
[00:17:39]
 Yeah, I forgot to update the
 just copied and pasted that update.
 got to update the discompreated and pasted that update. The so also TVV for a function that deletes accounts and a path in route and handler,
 that's a fixed as to.
 So path in route and handler for that meet the cat function.
[00:18:07]
 Again, there should be a live link to,
 so I need to fix this because you're going to have live site.
 We'll not, we'll not render this assignment. It's named up, signed to the changes.
 And I'm looking here.
 But yeah, I just wanted to give you a heads up.
[00:18:35]
 I, yeah, I know I have to make some fix a few typos here,
 but at least I give you some clarifications,
 which need for this assignment. And maybe you finish that assignment soon or or maybe already done with it or almost done with it.
 Maybe you need more points in anything that closed, either mini evaluations or
 assignments, caps and assignments. By the way, these mini evaluations are assignments too.
[00:19:22]
 They're graded like assignments, so you need at least 75
 percent for higher to pass these assignments. So these are assignments. So, you know, and you
 should also know that it's an evaluation so, you know, evaluations are not taken lightly.
 That's the thing that decides whether you pass. It's one of the major factors.
 So you need extra points on things that have posed. You need to contact the student success team and tell them you're interested in making a submission.
[00:20:09]
 On assignment that closed, let them know which assignment that is
 and the reason why you felt behind.
 Practice problems are here, on the side.
 Let's see if there's anything new.
 Any new questions in July cohort.
[00:20:30]
 Last time I checked there was any,
 but I was just making sure.
 Yeah, nothing new in July cohort,
 but remember to ask your questions there
 for clarification on anything.
[00:20:52]
 Again, mark your days in order.
 Mark them in order so that, uh, you'll be, um, you know, caught up in a systematic way without any holes in your knowledge, because
 each day is built on knowledge from the days before.
 If you skip the day or you didn't learn everything in one of the days, you're going to
 go into the next day with holds in their knowledge.
[00:21:28]
 So, going order.
 And so, we're going to review now. Make sure you take notes during the review of you.
 Just anything, but definitely take notes when I start teaching the new stuff
 and have your microphone ready make sure it works for the mini evaluations
 and just feel free to raise your hand if you have any questions.
[00:22:12]
 So for the review, we're going to start with Google notebook LM.
 I'll show you guys the AI.
 It's artificial intelligence from Google.
 And we will be using Google for another backend deployment.
 We will be using Google for backend deployment, not just Lambda. Lambda, we're using Lambda, AWS Lambda for
[00:22:47]
 backend deployment. We will also learn how to deploy a backend with Google. Why is that?
 It's because Google is another popular service
 that can run your back end.
 And it's different.
 You can run a back end with Google without getting charged.
[00:23:13]
 But if you run a back end with AWS,
 you will get charged, even if nobody visits your site,
 or even if nobody even contacts your back end server.
 So at least with Google, you could run something and it won't get charged.
 And this will be the traditional way of, it'll be the traditional way of
[00:23:36]
 deploying the back end. Whereas, Lambda was, you know,
 a sort of a different way of going back in.
 So that's why we're taking a look at Google Now,
 and also AI, because I'll be teaching AI later,
 at least how to implement AI into your websites
[00:24:04]
 and how to use them in your websites.
 And notebook Lm is an AI, artificial intelligence,
 so I'll help you at least get answers to your questions
 about what I'm teaching in class.
 So let me show you.
[00:24:22]
 And let me show you.
 And let me get it loaded first.
 So if you didn't get a chance to try this part, I'm just going to press generate right here.
 I don't know if you'll hear it or not.
 But if I click on generate, it's going to just create some kind of audio file or audio that
[00:25:00]
 summarizes all of my notes here because I showed you that you can just
 upload all of your like level four notes
 Here's ai.md a ws.md, dynamo vb.md
 I'll let that generate
 One thing I haven't tried is uploading some of my code
[00:25:26]
 Because all of your notes I mean some of your notes are in your code. Like for example like
 TypeScript, some of that code, I mean some of these notes are in your code. So
 let me see if I can try some of this right now. I'm gonna try to upload some types of code that
 demonstrates some types of topics.
 So we have here read-ups notes. Let's see here.
[00:26:12]
 And the... is it in the back end?
 It might be in the front end when we have some TypeScript notes.
 Modules. modules, call back types, call back types or custom types.
 So maybe I'll give it those two, call back types and there's also return types.
 I'll give it those three. Let's see what notebook I'll have.
[00:26:47]
 Can you tell me about type two.
 I don't see here, let's see if it can take these types of files. It doesn't naturally take these types of good files.
 I had to pick all files here. So let's see if we can talk about custom types,
 fallback types, and return types.
 See what happens.
[00:27:37]
 Only the file types are supported.
 So if I did want to give them, give it the code, I'll just basically make a copy of this.
 Let's see if it works.
 Copy this.
 Paste it in.
[00:28:18]
 And then rename it.
 And then rename it. I'm going to start with the fire glue. and the car is hard to tell.
 Yes, totally.
 (inaudible)
 (inaudible)
[00:28:55]
 (inaudible)
 (inaudible)
 (inaudible) here. Here it is.
 I'm just going to rename this.
 So, I'm going to rename this text.
[00:29:16]
 We name it to text.
 We name it to name it to name it to name it to name it. So that's callback types text and custom types.
 And you need to make types and just copy this piece here and it's renamed it. to the text.
 This changes the extension here to the text.
 Okay, so now this should be contained.
[00:30:20]
 There it is.
 Gonna upload a vote.
 Hopefully it can do something about it. You need to see what it'll say.
 Okay, so I'm going to ask you the question about
 return types.
[00:31:03]
 Let's see if it has big concerns and code.
 Yeah, there's some sample code here.
 And it's good.
 This function has a return type of void.
 That does not return any value.
[00:31:22]
 So that's good.
 This one shows that it has a return type of string and it even explains that it expects the string.
 Let's see if I click on this number 4. Yeah, it has some, it has the code reference here. That's all you can click on in here.
 So it's in return type dot text and it shows me the code.
 My sample code there.
[00:31:48]
 So if you want to put some sample code, you just have to rename it to the text file.
 And we have player. This one has t.c. So that's return types. So that's return types.
 So that's good.
 It's accurately showing the code samples for return types.
 I wonder if we'll tell me what this ensemble is. What does the symbol, what does that symbol mean? And return types. In
[00:32:49]
 let's see.
 So it says it's a union type. That's correct. I never really explained it as that. But this one, I try to explain things in more English terms.
 So here it is.
 It can return a value of either of the types listed.
 So that's correct.
[00:33:16]
 So when we see a return type of string and then the symbol and then void, this function
 returns either a string or a void or either of these types.
 That's what the, so this kind of a AI is more accurate because it's based on, you know,
 information I already gave you guys. So basically it's almost answering the way I went and I'm an answer. This will answer with more detail and it puts everything together.
 So yeah, it's very useful. Very useful. That's why I'm wanting to introduce this to you guys.
[00:33:55]
 Are you able to hear this audio right?
 Thumbs up if you can hear it. Thumbs down if you can't.
 Can you hear it? It comes down if you can't. Can you hear it?
 It's playing right now.
 No?
[00:34:10]
 I wonder if I can somehow do that.
 Sure.
 Also, share it on you.
 Okay.
 Okay. Okay, okay, I can do it if I share a tab.
[00:34:29]
 [BLANK_AUDIO] Okay, let's try this. And here on our foundational cloud tech. and get a little pretty blue. OK.
 Let's try this.
 And here, now--
 foundational cloud tech.
 Today, we're going to connect some of those dots.
[00:34:51]
 Give you a practical handle on how they can really
 boost your workflow.
 Yeah, we're looking at two main areas-- first up AI,
 specifically--
 So this was generated from my notes.
[00:35:03]
 And it sounds like real people, but they are not real people.
 That's AI generated.
 And if you listen to them long enough,
 you will know that they're not real people, because instead
 of saying AWS, they pronounce it, and they say,
[00:35:19]
 ours or ours.
 And instead of saying, dot e and the, they say dot in the.
 So, um, you know, real people don't do that.
 But you can also interact with, you can also interact with it.
 If you play it, welcome to the deep dive.
[00:35:38]
 We've got quite a mix of information here with us and our mission, like always is to pull
 out the key insights, get you up to speed fast.
 If you click on this join button,
 pretty powerful tools and foundational cloud tech. Today,
 we're going to connect to your practical handle on how they can really
[00:35:55]
 boost our workflow. Yeah, we're looking at two main areas. First up AI.
 Oh, hey, our listener wants to join in. What's up?
 What can you tell me about the function return types?
 That's a great question. Return types are all about clarity. Yeah, think of it as making a
 promise about what comes out of a function. Our notes have some good examples. You see things like
[00:36:21]
 so, if you don't like to read you can just ask the questions
 It's like a interview like you're you're calling in to a podcast and you're asking questions
 Okay, so it's it's very cool
 Okay, so
 Yeah, it's an awesome tool and it's gonna be a great tool for your education.
[00:36:48]
 So if you're not caught up yet, maybe this tool right here will help you catch up.
 Or, if you just stuck on some things, maybe just tool up and get that stuff.
 It's almost like having, it's almost like having me answer your questions anytime of the day.
 Because it's basically the notes that just all depends on your notes.
 If you're able to keep up with the notes, it's going to answer pretty much the way I would answer things.
[00:37:30]
 All right, so Redux, what do we learn about Redux?
 We learned about the Redux store.
 Store is the Redux object that stores state variables. So with Redux, we're going to change the way we work with
 state variables instead of keeping them inside of components, we're going to put them in a
 central place that's called the Redux store. That's where we'll put our state variables.
[00:38:01]
 or we'll put our state variables.
 And I showed you how to create the need of store.
 It's not complete yet, but we got it started.
 And let me just pull up the notes here.
 And that's the score. It's going to be the net. And the net of strength. [BLANK_AUDIO] [ Pause ]
[00:39:18]
 My audio is not looking.
 Thank you. [ Pause ]
 All right. So here it is again. Thank you.
 All right, so here it is again. We created, I mean, we installed Redux.
 We have to use this as some app Redux,
[00:39:36]
 and then smash toolkit.
 And then in the store.ts file. I mean, you created that in the front end.
 So let me just open a separate VS code for the front end here.
 Because I don't know if I'll use the green bug or not.
 And it's complex less if I have a hook-ing and hook-ing.
[00:40:09]
 And then you different.
 Yes, come in.
 So we have modules folder.
 And inside that, we have a read-up folder.
 Inside that, we have a read-ups folder. Inside that we have
[00:40:25]
 store.ts and then we import configure store. That's here we imported it
 right here that's coming from read-ups to need us to kick right there and then we put in this line of code here to get
 it started right here and give your store giving it some store options Is there another question? So the next one, store options.
 So the readout store options, we share my screen about that.
 So the readout store options.
[00:41:44]
 That's the data typeup store options. That's the data type configur store options.
 So, right here, right here, there's score options.
 It's the data type configur store options.
 I showed you yesterday how to get that data type. And we just set it at the beginning.
 We just set it as a empty object.
[00:42:12]
 Right now it's not an empty object.
 When we set it up as an empty object, we didn't know it.
 We went inside a bit.
 When it's serious, we set the data type with this.
 It told us that it needs a reducer property.
[00:42:27]
 So that's when we added a reducer property. There's question marks here because we're not really sure what it should be yet.
 But we know that it should have a reducer property. So I have been quite gone to you explaining
 what the value for this will be.
 And we'll get there.
 We also learned about the reducer.
[00:43:02]
 So the reducer is a function that can change state variables in the
 read-up store. So reducer is a JavaScript term. It's not just for read-ups. It's basically
 a reducer is a function that takes in multiple inputs. And then it returns a single output. So somehow it combines
 whatever you put into it and then it turns it into one or less than whatever came in. So the
 analogy I gave before was like ingredients for bread. Yeah, flour,, water and butter, maybe, kind of like bread, but maybe some yeast so like to say
[00:43:50]
 both are four things. You put it into a reducer. You can introduce multiple things into one thing.
 When it's a function, a redux that's a function that can change state variables in the
 mean dot score.
 So how is that a reducer?
 Because actually, this reducer will take in.
[00:44:24]
 It'll take in all of your state variables. It takes in all your state variables and then is going to send back one thing that's unique.
 And let's see here. The property, to properly create a reducer
 that Redux expects, we need to use the function create slice.
 So it's not easy to create a reducer.
 That's why we have this question mark here.
[00:45:08]
 We have this question mark here, because we can't really make one.
 We have to sort of get it somewhere.
 And it starts from create slice.
 So the re-nuts slice, so as you guessed, it's the function is called create slice,
 so it should be creating a slice.
[00:45:40]
 And so what is the slice?
 A slice is an object that contains state variables
 and reduces that change them.
 So if you think of, I gave this sort of analogy
 or visualization, your app is like a pie chart
[00:45:59]
 or a pie graph.
 And a portion of your app consists of state variables. So that's like a slice of your app.
 You know the portion of your app also is made out of you know modules and another portion of that pie is made out of assets. the slice that redox needs it contains state variables and the
 reducers that change that change them that's the slice and red we came up with this line here.
 Okay so there's the important phrase slice from Redux JS toolkit. We use it here.
[00:46:59]
 We have to give it some slice options. This one returns a slice, so we capture it on the left side of the equal sign.
 We assign it to a variable here on the left side of the equal side.
 When we turn value, it gets assigned to the spirit, which will be a slice.
 So this will be a slice, a slice of your app containing state variables and reduced source.
 For again, producers are functions that in this case will affect your state variables.
[00:47:40]
 Like, I'll take them, change their values.
 Okay, slice options. So we didn't really know what kind of options we needed.
 But the options object defines state variables and renderings. So that's what the slice options is about.
 And so just to get our understanding of it, we set it as a empty object.
 And then we assert the data type as create slice options.
[00:48:30]
 Yesterday, I showed you how to get that data type. I'll do know what kind of data type is supposed to put here
 with data type you're supposed to assert.
 And then when you assert it, you find out
 that you need to have some properties.
 Let's see here, slice options. So after you assert it, as a create slice options object,
[00:49:02]
 we find out that we need to add a name in this list date and
 reduces property. So we added it here, name initial state and reduces.
 Then let the name, let the name, I said, "frey"
 It's like something named. So the name is Axel Poppery, so I don't know if you'll like that. And let the name describe the state variables. So I put global because the state
 variables are going to be global. You can put any description on here, whatever the
[00:49:56]
 make sense. And I didn't put any comments next to this because of the sort of suffix mandatory until one time you need this part.
 Initial state. The initial state, the pairs, state variables with g value pairs.
 state variables with g value pairs. So right here, I have an object called state variables.
 So if you think this object will contain, it should contain state variables. So here they are.
 It's just, we don't have people's signs or anything like that because we're just storing them as key value pairs
[00:50:51]
 This state variable I'll did now we start with a value of all this
 state variable that
 Calling click count will start with a value of zero this state variable that we're calling message will start with a value of
 And we did that, or we put that in a file, and put that in a file in state variables. And we export it right there.
 And then we import the state variables.
[00:51:41]
 Here we are importing the state variables in there.
 And we set the initial state to the state variables.
 So the state initial state is the state variables. [BLANK_AUDIO]
 Reduce the last slide that I talked about,
 slice reduces.
[00:52:21]
 Because that was the last piece of information that we needed.
 All I had a chance to go over,
 was just the introduction to reducers.
 We have here a property that we need to reduce our results.
 It's called reducers and we don't have a value for it.
[00:52:47]
 So, I'm starting to talk about that. So, a reducer is, or a, one of the reducers
 would just say a slice reducer is a function that accepts a state and an action object.
 So, here is this example of a anonymous function and accepts a state and an action
 object and that the function changes the state based on the action.
 So maybe like a did-mount state.
[00:53:20]
 Maybe the action was somehow say change did mount the truth.
 So that only just gave me some kind of concept with these objects contained.
 So the state object will contain state variables as key value pairs.
 And the action object will contain the new value for the state variable.
 And state and action objects will need to bind the line
[00:53:49]
 of Linux.
 So you never call this country self.
 You never call it the self.
 Linux call it.
 So it looks like we can take a break, 1000 last one, and see what else.
[00:54:11]
 That makes sense. [BLANK_AUDIO]
 >> I think you have to take minutes [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [ Pause ] All right, so we're back from the break.
 And what I'm going to do is just going to go over or walk through the
 the practice, this TDD read practice. We finished it up to the point I think to
 number four, I think we'll see.
[01:05:41]
 I'm going to load this up.
 Should be in the DVD practice.
 I can go ahead and click no, that's not it.
 I think I put it in a build somewhere.
 Oh, I just remade it then. unless it's part of Express might be part of Express.
[01:06:29]
 So pull that up. [ Pause ]
 >> Steve here at Foxy.
 Can you see what was that question about again?
 >> Yeah.
 >> It was about dynamo DB.
[01:07:01]
 Okay, so it's going to be a DynamoDB. Anything. Yeah. So I'm just going to scroll down so I can follow along here.
 And this is going to be in the back end, so I it is in complete.
 Let's see, in DynamoDB console, add name and phone.
 Okay, I remember I did that already.
 In index.ts, define the route read and the handler
[01:08:07]
 we're reading that account.
 index.ts is right here and, there's the handler right there.
 Here's the handler.
 It just has some placeholder data right there.
 In the module folder, use TDD to test the function read account.
[01:08:47]
 So there should be a function in the modules folder called read account.
 There it is.
 Test that it returns an email password name and phone when given an existing email.
 Okay, so let's see.
 Where should I create the data type?
[01:09:31]
 I think I can create the data type.
 Like I'm expecting some kind of result.
 And I'm expecting a name, email, and password, and phone number.
 a name, email, and password, and phone number.
 Well, maybe I'm not going to assert the data type here, but I can just write my test at least.
[01:09:58]
 So, I have a test for that, and I have a test for the result matches.
 Here's that test.
 And we're here with returns a result with the matching email.
 So basically the result, the email that comes in the results should also match the
 email that I specified here.
[01:10:30]
 The results should also match the email that I specified here. Test that it doesn't return to result when the email is not in the list.
 So here's that test.
 It doesn't return a result if the email is not in the list. Okay, so I expected it to be undefined.
 Or I can make it since I'm expecting an object anyways.
 Maybe I can let it be an empty object.
[01:11:03]
 Now it's easier to just let it be undefined.
 It's easier to check that if it's undefined.
 If it's an empty object, then we have to check if it's harder to check if something is an empty object.
 It's not that hard, but it's just easier to see if something is undefined.
 So I'm just going to do it that way.
[01:11:33]
 And test that it doesn't return a result when the email is an object.
 Okay, so this is one of those cases where, you know, we're testing unlikely cases.
 It's going to copy this over here and then just edit it as necessary.
 So it doesn't return a result going to make it an object and then check and it should,
 we're going to run that function, read account should should take in that email, even
[01:12:22]
 though it's just an object and the result should just be undefined
 because it shouldn't find the match for this. So I just, all I did was create the test.
 I didn't even write the function yet. You look at here. It's empty. I have nothing here.
 I've basically designed it right here. I designed what I want it to do.
 Now I can go in here and start typing up the function or coding the function according to the we'd account.
[01:13:10]
 And it's supposed to take in an email, which is a supposed to be a string.
 And it's supposed to return something. It's supposed to return an object, some kind of object, but instead of just defining that object here, I'm going
 to call it something.
 I'll call it a, it's going to return an account.
 So that's a custom type I haven't made it yet.
[01:13:42]
 I'm going to create it, but I'm just specifying
 that this is what is going to be the account type.
 I don't know what that is, but then I know eventually I'll return it into account. So let's see what will this account be?
 So this account is a custom type.
 I'm using the type keyword.
[01:14:38]
 I'm saying this account object that I'm going to return.
 It's going to look like an object that has
 an email, which is a string. And it has a password, which is a string. We should have
 a phone. Actually, then you put here before that. It should have a name, which
 will be a string. And it should have a phone that should be a number. Again, this
[01:15:14]
 looks like an object, but it's not an object. As soon as you put it in TypeScript
 mode, basically when you put TypeScript, you put it in TypeScript mode, basically when you put TypeScript mode and in TypeScript, the
 colon becomes the thing that lets you assert.
 You can assert when it's in TypeScript mode, but when it's in Object mode, the colon
 becomes the thing that assigns a value.
[01:15:45]
 So if I was going to create an account here like const account,
 this is in object mode or JavaScript mode.
 It wants to create an object.
 So if I put this one and then I put string,
 that's not right because it's not in TypeScript mode.
[01:16:03]
 It's an object mode or JavaScript
 mode. It's expecting a value after this colon. So maybe that value is like hello,
 like a, a, a, but here it's in TypeScript mode that colon becomes the part that makes the assertion.
 But here in object mode, the colon does the assigning signs values.
 Colon here asserts, so there's a difference between the starting and the signing.
[01:16:51]
 So here's the account and now it's defined right here.
 So this way this reader account should either return an account or undefined.
 Using this return function return value.
 Okay, so I just got that set up. It really doesn't do much right now.
 I'm gonna set up the script for it.
[01:17:28]
 Test would be, by the way, you can all you have to do is put the name on the test. You don't even have to put the path.
 Just will look it up for you.
 It's called read account.
 You don't even have to put that test.
 You don't have to put any extensions here.
[01:17:39]
 Just will find it for you.
 So it's going to look for the meat account and try to run it.
 I'm going to put it, I'm going to try to run it and see what happens. You can expect
 a lot of fails here. Four fails, which is fine. But I'm just starting. I'm just getting
 I'm just starting. I'm just getting started.
[01:18:04]
 I don't expect it to pass.
 I didn't even code it properly yet.
 So it's failing partly because I didn't import it.
 Now I'm importing it.
 Let me put this in watch mode.
[01:18:21]
 See if I can.
 See if I can put in a watch
 but it doesn't take watch like that.
 So I'm going to just click watch over here.
 They says some test cast
[01:18:54]
 let's see which one's cast.
 Well it doesn't really look best if I'll hear it is.
 Doesn't return a result if the email is not in the list. While these might change, as I'm coding my function,
 those might change.
 So this should be watching for changes.
[01:19:15]
 I might have to stop this.
 Yeah, I'm going to put it in a JavaScript debug terminal.
 a JavaScript debug terminal.
 It's in the JavaScript debug terminal so I can put great points.
 Okay, which one should I start with? Okay, so this one is...
[01:19:44]
 should I start with okay so this one is
 doesn't return in email all this one's easy. Does it return here?
 It doesn't return a result if the email is an object.
 That's easy I think I'm going to get started with that.
 If I can even just check it here before you need to get started with that. If I can even just check it here before you even get
[01:20:09]
 started. So, you have to remember your type of. I taught you guys that at a long time
 ago. Type of. If type of email, basically it's going to tell me if this email is a string, a Boolean,
 an object.
 So if it's an object, I want to just return because it's undefined.
 I was even put here on the find.
[01:20:50]
 So it was just a major clear.
 Okay, so that, that should take care of the last test.
 Okay, it ran already.
 And the second to last test
 does it return if the email is not in the list?
[01:21:17]
 Or does it return in a result if the email is not in the list?
 So I need to get some kind of I need a DynamoDB client
 to even
 You got an email
 So let me see if it's coded somewhere here
[01:21:42]
 Where is my dynamo do you find okay, we're having read them out?
 I have this dynam demo. I have this kind of movie client right there. This pasted it in here, I need to import things into import these. So I just basically we type the last letter as the last this way.
 I need to get these environment variables.
 I need to invite, I need to get those by getting.env.
 getting.env. There it is, and I need to configure it.
[01:22:36]
 I need to do that to get the environment variables from the e
 and v file. I should have my in your file here and there. So it's going to get my my region access
 key and secret access key from the environment variables. I'm going to create a DynamoDB client and then it's going to check if I don't have an email. So a nice client
 is going to use the get request. Actually, I need to set up the request.
 Here's my request when I'm going to request. I'm going to request the table log-ins and I'm going to
[01:23:39]
 which email though I wanted to pull. Not this one. I don't want it to pull that email.
 I wanted to pull this email up here.
 So I'll put that there.
 If that confuses you, then, then I can just rename this.
 Target email.
[01:24:02]
 So target email.
 So target email. That way it doesn't confuse you with this
 key right here.
 I'm property.
 So I have these. Now I need to go and
[01:24:20]
 use that request.
 This one is to read them to go and use that request.
 This one is to read them over that TS.
 It shows me how to read data.
 So I need to use the get method and pass the request to it.
[01:24:37]
 And that's going to give me a response.
 And then the uni so that nice client is going to use the get method and the request. I need to await that.
 I need to await the async here to make the await work.
 Because if I don't put async here,
 then await has a red line underneath.
[01:25:22]
 You can put async to enable it there. since this is a sink, I need to
 await this over here. Actually, this is not the one I'm testing. So let me skip this right now
 and I'll skip this one for now, too.
 I'll run both of those.
 I need to wait this one because I just put a seat in front of it.
[01:26:04]
 There's a ready here that means I don't have
 a sink right here in front of this arrow function.
 So it happened in the fact that it's material. So here, these things going on here.
 You can count.
 I know I need to put up.
[01:26:41]
 I need to have to wait there.
 Put any right here.
 Reason why is because TypeScript is expecting a string, but I'm giving it an object, so
 I'm just going to override that and tell a TypeScript to react.
 I can put any object in there, anything I want.
[01:27:08]
 And TypeScript will say, "Okay, go ahead."
 Maybe just shows this file, 'cause it should be,
 should not be shown in the,
 this three dots here. You can't. You should have waited.
 This will be something.
[01:27:36]
 There's four basing of the count.
 Oh, that's why.
 So now I'm actually not returning an account and undefined.
 I'm returning a promise.
 I'm returning a promise right here, which has a result value of account for undefined.
[01:28:03]
 So this is something I haven't specifically
 taught you guys so all you have to do is put a promise here because when you
 have a sink that means your function will return a promise. So this one is asserting that I'm returning upon this, but I should also put here
 what that promise contains. We see what happens if I take that out. If you
 don't specify, if you don't specify the type, that's what a t stands for.
[01:28:51]
 So you need to specify the type of the resolved values. So it's going to, or think of them as your return, because it just looks like the return return here.
 because it just looks like return here.
 But actually, this is the result value.
 So that's the proper way to do that. So now there should not be any three dots here.
 Because I properly asserted the return type here as a promise. Return type here is a promise.
[01:29:39]
 And then we'll just go down here.
 and scroll down here.
 When they both passed,
 doesn't return a result if the email is not in the list.
 Okay, so it actually doesn't return, I don't even set it as anything.
[01:29:58]
 So it's not returning a result at all.
 I'm returning an account,
 but then I never set that account to anything.
 So let's fix that. So this response should have an I.M. If the email is correct, maybe I should do that first.
 And we see what it looks like when it gets a correct email.
[01:30:35]
 So let me skip this one first.
 You've got to read and fix it.
 I got the last one.
 So that last one was if it's an object, I already fixed that last one. So that last one was, if it's an object,
 I already coded that part.
[01:30:50]
 Maybe try this one here.
 This one says, it should return an email,
 password name, and phone, or an object that has those properties.
 So let's try this and see what this one and see what kind of response you get.
 This should have an item in it. I can't need to just put in some things here so this water can be run.
[01:31:33]
 It stops on the debugger.
 That's not where it can be built in. [BLANK_AUDIO]
 And so it's not beyond the welcome factory, so I'm just going to put this code right there.
 [BLANK_AUDIO] So the response came in.
 It's, I see that it has an item.
[01:32:14]
 So that account right here should be the item.
 Account equals response.
 Not item. response, not INUP. As I see that item, as a password, email, name, and phone, and this
 account here, should have a password, email, phone, and name. There's just this part right here this as, I don't know what this is. What the error is, so I'm just gonna let it run.
 Let's see what this TypeScript error is.
[01:32:52]
 So in this case, I need to assert it.
 What I'm gonna do is, let's see if I can go like this.
 It still complains. So in this case, in the flip is back, as the count. So again, if it doesn't work when you assert here at the front, then assert it at the this exiting.
 Again, if you put the account here and you don't put this one back here, it doesn't like it.
 It's saying it expects a record type. So instead, I'm just going to take this out, put it at the back.
[01:34:24]
 And the reason why I put the output constant now, but I'm eventually going to change
 it to that.
 So this one should pass.
 Not going to be the only that people here.
 I'm going to stop there.
[01:34:44]
 I'll press play, and it passes.
 Why?
 It's because it has, it's gonna get an object back, and it has these properties in
 an email password named own, and that's what I was testing for here. Next one, this one should work fine also. It returns a result with the matching
 email, matching the easy. I think that's going to be solved by itself. So here's the response.
[01:35:48]
 the item is all there and those? So let's see what happens if I try to activate that.
 So this is what I'm trying to focus on.
 It doesn't return a result if the email is not in the list.
 So I don't have this on the list.
 Let's see what happens.
[01:36:11]
 Just going to press "Play to
 on the
 okay so it works fine. Everything passed. So that's good to go. Make sure you check your measuring check that your tests are correct. I can put the proper values in the
 range phase. Make sure you're running the act phase properly,
 and make sure you're asserting the correct things
[01:36:49]
 in the assert phase.
 You should, because we're doing a lot of copy and pacing,
 and when you do copy and pacing,
 you can have a lot of typos.
 Just like that.
[01:37:03]
 Capstone, capstone, back in accounts.
 I had a lot of time closing there because I copied and pasted it.
 So when you're copying and pasting your text, your tests, make sure you check them.
 Any questions about this?
 So basically what you saw was that I did the test first and then I coated it later.
[01:37:40]
 And then I chose which one of the tests I should start trying to fix first.
 And I chose the easiest one basically, which was the last test.
 Okay, so we have a little bit of time for Redux.
 So let's get some new notes for that.
 So this is a continuation on the...
[01:38:21]
 Actually, did I finish?
 I'll finish this.
 Oh, the route handler. I didn't finish the route handler.
 I need to go back to the route handler here. So I finished the the function, the read
 function. Now I need to finish the route handler here. This is the route handler
[01:38:53]
 and instead of sending this data, I want to send something else with what I want to send? I don't know yet. I know I want to run that test to read
 account and that one takes an email and it's a promise so I should await that. I can see it's in return to promise when I put
 this print to see here. I returned the promise so I should await that and if I
 need to await that I know I need to put a sync up here. This one needs an
 email where I'm not gonna get that email from. I need to get it from the request.
[01:39:47]
 This request object.
 Well, I already know where it's going to come from.
 It's going to have a query object.
 That query object is going to have a email in it.
 So that's my email that I'm going to take into here.
[01:40:35]
 And then you can put that email, you're going to pass that email to me to count. So I need that email to be a string.
 There's a type to get error.
 See, argument of type string or parse or all this weird stuff.
 I know it's supposed to be a
 string so I could try asserting it right here. If that work, no it didn't work so
[01:40:50]
 I'm going to move this through the back over here.
 So I'm going to suppose to get some kind of account result from here should be an account.
 So I should assert this that account yet. I should be exporting it somewhere.
 I'm not going to use it.
 It's stuck inside of here.
[01:41:39]
 Inside of this function file.
 So I'm just going to create a different file for this.
 I'm going to do a different way and I'm going to try to move back to it. [no audio]
 There it is.
 Right here.
[01:42:20]
 So there's a new file called the
 count. I'm exporting it. The reason why I put it into a new file called account. I'm exporting it.
 The reason why I put it into a new file is so that it can be
 in module all its on its own.
 And I could import it into here.
[01:42:37]
 That way any function that wants to use this account type,
 this custom type, it has access to it. So you thread here. Any function
 that wants to use it. It's right here. It's access to it. Instead of being stuck in this function.
 And I'm going to send that account.
 I can test this right now. So, and we start the back end.
[01:43:21]
 I should have needed people to get in.
 I can start.
 I can start.
 I should also to test it.
 Now it's going to which route.
[01:43:54]
 It's going to the read route.
 And I'm going to send three parameters to it.
 So there's a question mark.
 And I'm going to send an email.
 What is that email going to be?
[01:44:15]
 Actually, maybe I should put a few other things. you can see it coming.
 So I'm starting this server in a JavaScript one, too. We have a few points here.
 Thank you. I have this ground there set up and I'm that it has a query object right there and that query object has a female and that female is AAV@ AAV.com. So I can, if I run this line, this one should have correct value.
 There it is.
 I'm gonna try to get that count.
[01:46:02]
 If I run that file.
 Let's see if the account fits.
 Okay, that's good.
 It has email, name, password, and file.
 And that can send a response to the data account information.
[01:46:17]
 If I look at the browser and show them the font for you. and it's still from this contrary unit.
 If I sent the account.
 All right, so there, that finishes that. It doesn't give me less time to work on the read-ups.
 I'm like, talk about Redux.
 Let me see here.
[01:46:56]
 I guess we can do two signs of this.
 We're going to talk about the reducers, we're in the middle, um,
 making other reducers are going to be a function that changes the state variables.
 We define these functions.
 We just won't call them.
[01:47:38]
 It's not us who calls them, but we define it.
 So what we're going to do is we're going to find them, define them as being a setter.
 So, you know, in React, you had used the code called UState,
 and then on the left side of the equal side,
 you had, you know, you captured the value,
[01:47:57]
 and we also had the setter.
 So, we're going to replace that setter
 with our, with a reducer here, and we're going to replace that setter with our with a reducer here and we're going to define them.
 We're going to define them as setters.
 These functions.
[01:48:16]
 We're going to make our own setters basically.
 When we use the use when we use the help called "UState", it gave us the center.
 But in this case, we are going to make our own center.
 So let's copy this.
 And it's pretty easy to set values.
[01:49:07]
 value is [wind blowing]
 [wind blowing]
 [wind blowing] We're not either too able back. [wind] You can see that's here. [BLANK_AUDIO]
 [BLANK_AUDIO]
 So we will program the producers to be setters.
[01:50:44]
 You can see there will be some examples over here.
 And then the setters are functions that set the state of a variable.
 Set the value of their state variable.
 And the function name, since we have to have
 functions, the function name, what we're going to do differently is the
[01:51:12]
 function name will be the name of the state variable instead of starting the
 root set. You know how setters we're using start_end of the word set. We're gonna do something different and just call it by the same name as their state variable. So we'll create a basically an object.
 so let's in the front end
 and mix it all the other redox stuff
 state centers
[01:52:07]
 and then just export export into the object. Export state setters.
 It's just going to be in empty object from now. [ Inaudible ]
 Okay, so we need to add state variables.
 All right, we now have methods.
 We need to add methods that match the state variables. So these are our state variables.
[01:52:48]
 There's this did mount the count message. So let me just go back here. So there's this mount. And these are supposed to be methods.
 So there needs to be some kind of function.
 There needs to be some kind of function.
 So I'm just going to put here a function like that.
 And there's a quick count.
[01:53:21]
 And there needs to be some kind of function for these are methods and there is also
 messy. So these properties here are basically methods that match their staying variable.
 So I'm going to put here.
 State settings are methods that match the current.
 So, we are methods because there are functions and connect into an object, we're inside an object.
[01:54:19]
 You just don't know what these functions can be right now. Let their values be unknown.
 So let these values right here be anonymous functions.
 So that's what we have right now anonymous functions.
 That accepts a state and an object, state and an action object. [ Inaudible ]
 And an action object.
[01:54:52]
 [ Inaudible ]
 What does that look like?
 It's the beginning here.
 So they are anonymous functions that accept a state and an action object.
 And same here here.
[01:55:12]
 And I mean the same here.
 And I'm just going to copy this. and on this being popping this press
 inside this, put it back in
 it's getting in here
 right
[01:55:47]
 right, going from here sure, when we set up I can just put it here. I can just put it here. I can just put it here.
 I can just put it here.
 I can just put it here.
 I can just put it here.
 I can just put it here.
[01:55:59]
 I can just put it here.
 I can just put it here.
 I can just put it here. I can just put it here. I can just put it here. And then we let the values of these, the anonymous function, that accepts the state and
 the action order.
 So that's the setup for now. [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [ Pause ] Okay, so we're back from the break.
[02:07:11]
 And now you have time to work on the Simon.
 Here it is again, the capstone back in accounts, but now you have more description.
 I mean, it's described in the sidebar of your codex account.
 So more description or more details about it. And I also ran through the
 the walkthrough or the not the create but the retrieve retrieving a user account.
[02:07:48]
 So that should give you a better understanding
 of what you need to do for updating the leading
 and creating a user account.
 I'm gonna open the breakout rooms now.
 As usual, one for collaboration, one for silence, and up for 40 minutes.
[02:08:35]
 Any volunteers?
 Otherwise, I just have to fix someone from the list.
 Let's go with week five.
 If you volunteer, you get to choose your week.
 If I call upon you, then it's going to be week 5 that we're going to do.
[02:09:14]
 And you'll only get the on time point if I call upon you and we do with the many evaluation.
 Okay so it looks like Alex and you have to grow up.
 [ Writing on Board ] Hopefully she's here.
 I like Sandra are you there?
 Put a message here.
[02:10:15]
 Sandra, okay.
 >> Okay.
 >> With one.
 >> Amazing.
 >> Oh, your mic was on.
[02:10:21]
 Okay. I'll see you in the MIDI evaluation room.
 >> Uh, for which evaluation?
 We, uh, this week.
 This week? Okay. [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [ Pause ]
 And let me just leave the file first.
[02:48:41]
 I mean, can we have the answers?
 >> I'll be capping while you do that.
 Okay.
 Okay, so the breakout rooms are back.
 Okay, the breakout rooms are back and we're going to conclude the class.
[02:49:07]
 All I was able to teach about was Redux, LICE, reducers.
 Basically, we were starting to code the function.
 What else did I teach?
 Oh, we went over the TDD read practice.
 So, I should add it here.
[02:49:29]
 We went over TDD practice.
 We finished it.
 The back end and also the route.
 So, that gives you a very good idea of how to do the assignment that's due tomorrow.
 I mean, you should have already gotten started
[02:49:51]
 and you just need to do some finishing touches
 after, you know, seeing how I
 showed you how to complete the TDD read practice.
 Now we're gonna, you have a chance
 to take your attendance or mark your attendance.
[02:50:10]
 You have three minutes to do it.
 And class is dismissed.
 That's today's lesson on Redux,
 but I'm gonna continue the mini evaluation
 with Alexandria, and I'll open up the breakout rooms. [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [BLANK_AUDIO] [ Pause ] [BLANK_AUDIO]