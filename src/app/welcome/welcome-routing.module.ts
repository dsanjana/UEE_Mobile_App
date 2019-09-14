import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { WelcomePage } from './welcome.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: WelcomePage,
        children: [
            {
                path: 'admin',
                children: [
                {
                    path: '',
                    loadChildren: './admin-dashboard/admin-dashboard.module#AdminDashboardPageModule'
                }
              ]
            },
            {
                path: 'student',
                children: [
                    {
                        path: '',
                        loadChildren: './student-dashboard/student-dashboard.module#StudentDashboardPageModule'
                    }
                ]
            },
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: './admin-dashboard/home/home.module#HomePageModule'
                    },
                    {
                      path: 'attendance-and-results',
                      loadChildren:
                        './admin-dashboard/home/attendance-and-result/attendance-and-result.module#AttendanceAndResultPageModule'
                    },
                    {
                      path: 'employee-list',
                      loadChildren:
                        './admin-dashboard/home/employee-list/employee-list.module#EmployeeListPageModule'
                    },
                    {
                        path: 'employee-list/add-new-employee',
                        loadChildren:
                          './admin-dashboard/home/employee-list/add-new-employee/add-new-employee.module#AddNewEmployeePageModule'
                    },
                    {
                        path: 'employee-list/update-employee',
                        loadChildren:
                          './admin-dashboard/home/employee-list/update-employee/update-employee.module#UpdateEmployeePageModule'
                    },
                    {
                        path: 'send-sms',
                        loadChildren:
                          './admin-dashboard/home/send-sms/send-sms.module#SendSmsPageModule'
                    },
                    {
                        path: 'student-list',
                        loadChildren:
                          './admin-dashboard/home/student-list/student-list.module#StudentListPageModule'
                    },
                    {
                        path: 'student-list/add-new-student',
                        loadChildren:
                          './admin-dashboard/home/student-list/add-new-student/add-new-student.module#AddNewStudentPageModule'
                    },
                    {
                        path: 'student-list/update-student',
                        loadChildren:
                          './admin-dashboard/home/student-list/update-student/update-student.module#UpdateStudentPageModule'
                    },
                    {
                        path: 'fee',
                        loadChildren:
                          './admin-dashboard/home/fee/fee.module#FeePageModule'
                    },
                    {
                        path: 'text-caster',
                        loadChildren:
                          './admin-dashboard/home/text-caster/text-caster.module#TextCasterPageModule'
                    },
                ]
            },
            {
                path: '',
                redirectTo: '/welcome/tabs/admin',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/welcome/tabs/admin',
        pathMatch: 'full'
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WelcomeRoutingModule {}