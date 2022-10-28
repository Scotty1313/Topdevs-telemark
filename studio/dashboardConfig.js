export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '635ba0ce4a2393169f6bad5d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cwgz92qa',
                  apiId: '2bcce4e5-9331-4b84-a41e-f7567343a246'
                },
                {
                  buildHookId: '635ba0ce42548a164c12b9e3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ofs9aw5v',
                  apiId: 'b882cc9a-6417-4c3b-a956-eae9b92ba9ef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Scotty1313/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ofs9aw5v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
