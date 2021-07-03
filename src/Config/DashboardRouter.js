import React from 'react'

function DashboardRouter() {
  return (
    <Switch>
      {
        routes.map((route)=>(
          <AppRoutes
            key={route.path}
            path={route.path}
            component={route.component}
            isPrivate={route.isPrivate}
            exact
          />
        ))
      }
    </Switch>
  )
}

export default DashboardRouter;