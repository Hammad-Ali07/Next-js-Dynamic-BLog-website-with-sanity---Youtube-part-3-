import {defineField, defineType,defineArrayMember} from 'sanity'

export const blog =defineType( {
    name: 'blog',
    title: 'blog',
    type: 'document',

    fields: [
        defineField({
        name:'Title',
        type:'string',
        title:'Title' ,

    }),

    defineField({
        name:'Paragraph',
        type:'text',
        title:'Paragraph',
        
    }),
    defineField({
        name:'slug',
        type:'slug',
        title:'Slug',
        options:{
            source:'Title'
        }
    }),
    defineField({
         title: 'Image',
         name: 'image',
         type: 'image',
         
    }),
    defineField({
        
            title: 'Block', 
            name: 'block',
            type: 'array', 
            of: [{type: 'block'}]
          
    })
    
    
    ]
    
})