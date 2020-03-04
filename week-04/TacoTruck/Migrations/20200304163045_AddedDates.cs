using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TacoTruck.Migrations
{
    public partial class AddedDates : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "FirstDayOfService",
                table: "Trucks",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "LastDayOfService",
                table: "Trucks",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstDayOfService",
                table: "Trucks");

            migrationBuilder.DropColumn(
                name: "LastDayOfService",
                table: "Trucks");
        }
    }
}
