(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{1666:function(e,t){e.exports={content:["article",{},["h2","Prompt message"],["p","Any product can not be separated from user guidance and information prompts even if the user interface is doing well. The prompt information is used to tell the user what needs to be known and what action to take."],["h3","Alert"],["h4","Alert"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/rmsportal/eviVRYTdxOxOfVENLnxq.png"}]],["p","It is a non-blocking information display. It does not interrupt the user's current operation. It usually stays at a certain position on the page (top preferentially). The static display form of the non-floating layer is always displayed and will not disappear automatically. The user can click shut down."],["blockquote",["p","Note: The close button can be added or hidden according to business needs."]],["h3","Notification"],["h4","Notification"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/rmsportal/nElczRfDzAXRZSkpiJBQ.png",description:"Used when the notification content is complex"}]],["p","The important global notification information actively pushed by the system is displayed in the upper right corner of the system."],["h4","Badge"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/rmsportal/bVonmOmmkuvybQxTDGTC.png",description:"When there is an icon, it is usually in the upper right corner of the icon; in the case of no icon, it is usually at the back of the title."}]],["p","The message prompt for the aggregate type, generally appearing in the upper right corner of the notification icon or avatar, attracts the user's eye through a striking visual form."],["blockquote",["p","Note: Relatively important and user-related information prompts, use digital precision prompts; weights are not high and are not the user's special concern message prompts, use red dot to make tips."]],["h3","Help"],["h4","Popover"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/rmsportal/zsPOjQqkiwMnMhIsbDHz.png"}]],["p","When the target element has further description and related operations, it can be stored in the card and displayed according to the user's operation behavior."],["blockquote",["p","Note: The difference between Tooltip and Popover is that Popover can carry more complex content, such as links or buttons."]],["h4","Tooltip"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/rmsportal/CKDiGEsluwkRRGqujpgv.png"}]],["p","Used to accurately describe the pointed object, such as icons, graphics, links, etc. When the mouse is moved in, the prompt is displayed, when the mouse is moved out, the prompt is disappeared. And the complex text and operations are not carried."],["hr"],["h2","Process feedback"],["p","Feedback of the status is given to the user as much as possible during the operation, and the immediate response will give the user a sense of trust."],["h3","Loading status progress feedback"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/rmsportal/cHaaqZTvzgCZiYUnfNom.png",description:"Used when users don't have to wait for a long time to load."}]],["p","When the operation takes a while (usually more than 2 seconds) to complete, the system should immediately give a reminder, clearly inform the loading status or loading progress bar, and maintain communication with the user."],["p",["br"]],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/antfincdn/j6XiEx6UUV/676a18a1-bf60-4d93-8f94-55f1882dd13e.png",description:"Used when the operation takes a long time to complete, showing the current progress and status of the operation."}]],["blockquote",["p","Note: If the loading time is long, a cancel operation should be provided."]],["h3","Input feedback"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/rmsportal/CCeqqndHQgWnqVqvRptA.png"}]],["p","During the operation, different verification rules and forms can be used to allow users to find and correct errors in time."],["blockquote",["p","Note: The feedback text is followed by the block to be explained (the feedback content is generally an error description) and does not disappear automatically (it disappears when the user performs the corresponding interaction)."]],["h4","Popconfirm"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/rmsportal/lPZZxOAakfNhwfrpRPht.png",description:"The interaction form is lighter than the full-screen centered mode dialog."}]],["p","When the operation of the target element requires further confirmation by the user, a floating layer prompt is ejected near the target element to inquire the user."],["hr"],["h2","Result feedback"],["p","Feedback of the status is given to the user as much as possible during the operation, and the immediate response will give the user a sense of trust."],["h3","Message"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/rmsportal/pqJMJfJGLkYTDbLyJwIg.png",description:"When users don't have to wait for a long time to load."}]],["p","The feedback floating layer triggered by an operation is centered on the top and disappears automatically, which is a lightweight reminder that does not interrupt the user's operation."],["p",["br"]],["p",["img",{class:"preview-img no-padding good",align:"right",src:"https://gw.alipayobjects.com/zos/rmsportal/DrKzGoqfLRtrPuZaHUiq.png",alt:"Correct Sample",description:"Important failure messages suggest using dialog box prompts and telling the reason for the failure."}],"\n",["img",{class:"preview-img no-padding bad",align:"right",src:"https://gw.alipayobjects.com/zos/rmsportal/akPBJQUiUWNsULtGOnyx.png",alt:"Incorrect Sample",description:"Lightweight prompts are not recommended for important failure messages."}]],["p","Since the feedback floating layer has a short presentation time (default 3s), for more important failure notifications, it is recommended to use a dialog box to notify you to avoid missing information."],["h3","Dialog feedback"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/rmsportal/OTzldmUjUgERMbUCHwzt.png"}]],["p","The feedback floating layer triggered by an operation is located at the center of the page, and the feedback content can be closed by the confirmation or cancel button. The user cannot perform any operation when the feedback layer appears, it's for important feedback."],["blockquote",["p","Note: Avoid displaying unnecessary reminders except it fails. Dialog is a strong feedback mechanism that is only needed when passing on very important and actionable information."]]],meta:{category:"Patterns",order:11,title:"Feedback",filename:"docs/spec/feedback.en-US.md"},description:["section",["p","In order to help users understand what the application is currently doing, and to refer to the user's next behavior, and to understand the results of the operation, when the user need to interact with the system , use different modes to feedback information or results. When the designer uses feedback or customizes some feedback, please note:"],["ul",["li",["p","Provide users with necessary, positive and immediate feedback at all stages;"]],["li",["p","Avoid excessive feedback, so as not to cause unnecessary disturbance to the user, you can omit the feedback prompt at the results users can see immediately and simple operation."]]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Prompt-message",title:"Prompt message"},"Prompt message"]],["li",["a",{className:"bisheng-toc-h2",href:"#Process-feedback",title:"Process feedback"},"Process feedback"]],["li",["a",{className:"bisheng-toc-h2",href:"#Result-feedback",title:"Result feedback"},"Result feedback"]]]}}}]);