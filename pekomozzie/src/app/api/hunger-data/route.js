import { createClient } from "@/utils/supabase/server";

export async function GET() {
    try {
        const supabase = createClient();
        // console.log('anyone home?')
        const {
            data: { user },
            error: userError,
        } = await supabase.auth.getUser()
        // console.log(user)
        // console.log('flagggggggy ')
        if (userError) {
            console.error("Error fetching user:", userError);
            return new Response(JSON.stringify({ error: "Failed to get user" }), {
                status: 401,
            });
        } //else {
        //     console.log("hunger-data current user", user);
        // }

        const user_id = user.id;
        
        const { data: goals, error: goalsError } = await supabase
            .from ("goals")
            .select ("*")
            .eq("user_id", user_id)
            .order("created_at", { ascending: false })
            .limit(1)
       
        if (goalsError) {
            console.error("Error fetching goals:", goalsError);
            return new Response(JSON.stringify({ error: "Failed to get goals" }), {
                status: 500,
            });
        }

        if (goals.length === 0) {
            return new Response(JSON.stringify([]), {
                status: 200,
            });
        }

        const today = new Date().getDay();
        const daysSinceMonday = (today + 6) % 7;
        const mostRecentMonday = new Date();
        mostRecentMonday.setDate(mostRecentMonday.getDate() - daysSinceMonday);
        mostRecentMonday.setHours(0,0,0,0);
        const startDate = mostRecentMonday.toISOString(); 

        // Do we need to set an end date...Sunday??

        const weekly_quota = goals[0].weekly_quota;

        const { data: jobApps, error: jobAppsError } = await supabase
            .from ("job_apps")
            .select ("*")
            .eq("user_id", user_id)
            .gte("created_at", startDate)
            .order("created_at", { ascending: false })

        // console.log("jobApps", jobApps);
        // console.log("weekly_quota", weekly_quota);

        if (jobAppsError) {
            console.error("Error fetching job apps:", jobAppsError);
            return new Response(JSON.stringify({ error: "Failed to get job apps" }), {
                status: 500,
            });
        }

        return new Response(JSON.stringify({ jobApps, weekly_quota }), {
            status: 200,
        });
    } catch (error) {
        console.error("Error handling GET request:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
        });
    }
} 